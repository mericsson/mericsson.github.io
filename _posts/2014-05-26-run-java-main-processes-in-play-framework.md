---
layout: post
title: "Run Java main processes in Play Framework on Heroku"
excerpt: "Square peg in round hole?"
tags: [Java Play, Heroku, Heroku Scheduler]
comments: true
---

I have been working on a [side project] for a while now (more on that later!) but just wanted to share a quick helper for something I was stuck on.

If you use [Java Play] as your web app framework and want to run a Java main process (utilizing the same Play environment) there are a few options.  Initially, I used Heroku to do this but later when moving to EC2 I needed to run them manually.

First, with Heroku you can use [Heroku Scheduler].  Java Play works well with Heroku Scheduler.  For my version (2.1.3) of Java Play, to do that you need to create a Procfile that looks something like this]:

    web: target/start -Dhttp.port=${PORT} ${JAVA_OPTS}
    emailworker: java -Dconfig.file=conf/application.conf -cp "target/staged/*" jobs.JobProcessMain .
    appUpgrader: java -Dconfig.file=conf/application.conf -cp "target/staged/*" jobs.AppUpgradeMain .
  
First line `web` is to start the web application.  Without a Procfile, this is done by default.  The `emailworker` and `appUpgrader` point to two Java classes with static main methods defined.

Then, to run a job you can use the cron capability of Heroku Scheduler or kick it off manually with `heroku run emailworker`.

This works great but there are a few gotchas with Heroku Scheduler.

1. Any time a one-off job runs, it uses Dyno resources and and can cost you money.
2. Heroku Scheduler only runs as frequent as every 15 minutes.

Instead, if you would like to run a one off Java Play process manually on command line (or EC2) it is important to remember that Play Framework wraps [sbt] and sbt commands can be run inside Play.  In this case, we want to run the sbt command `runMain`.  In Java Play, the way you would do it is:

    play "run-main jobs.JobProcessMain ."

I suspect this is what Heroku is doing under the hood.

*Update 2015-01-09*
  
The above command is not ideal.  It successfully runs the main class but it fails to end the 
sbt session which will cause the process to hang.  sbt offers the helpful [sbt exit] command and play gives you a way to string sbt commands as found in the `play help `.

	; <command> (; <command>)*   Runs the provided semicolon-separated commands.


So the ideal result is:

	play "; run-main jobs.JobProcessMain . ; exit"
	
Now when the JobProcessMain completes, the `sbt exit` will be called immediately afterward.  Hope this helps!  Send any questions/comments to me [@mericsson]. 

[side project]: http://betainbox.launchrock.com
[Java Play]: http://www.playframework.com/
[Heroku Scheduler]: https://addons.heroku.com/scheduler
[sbt]: http://www.scala-sbt.org/
[sbt exit]: http://www.scala-sbt.org/0.13/docs/Command-Line-Reference.html
[@mericsson]: https://twitter.com/mericsson
