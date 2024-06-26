(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{407:function(t,e,a){t.exports=a.p+"assets/img/step-2-half-compress.4a3a88ff.jpg"},471:function(t,e,a){"use strict";a.r(e);var o=a(46),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"rrpathvisualizer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rrpathvisualizer"}},[t._v("#")]),t._v(" RRPathVisualizer")]),t._v(" "),o("p",[t._v('RRPathVisualizer was written by David, Recharged Green 7236\'s lead programmer. It is a path "visualizer" in that you write your trajectories as you would for your bot and you stick them in a custom Kotlin project. If you run the program it will display a window and animate the bot along your specified trajectories. I personally prefer this workflow as you can simply copy-paste the trajectories you made in RRPathVisualizer into your own FTC project.')]),t._v(" "),o("p",[t._v("Keep in mind that RRPathVisualizer is written in Kotlin. It should be easy to understand Kotlin if you know Java.")]),t._v(" "),o("h2",{attrs:{id:"installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Install "),o("a",{attrs:{href:"https://www.jetbrains.com/idea/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intellij"),o("OutboundLink")],1)]),t._v(" "),o("ul",[o("li",[t._v("Although the community edition is free, you can get the ultimate edition for free if you sign up with a "),o("a",{attrs:{href:"https://www.jetbrains.com/community/education/#students",target:"_blank",rel:"noopener noreferrer"}},[t._v("student account"),o("OutboundLink")],1)])])]),t._v(" "),o("li",[o("p",[t._v("Clone or download "),o("a",{attrs:{href:"https://github.com/RechargedGreen/RRPathVisualizer",target:"_blank",rel:"noopener noreferrer"}},[t._v("RRPathVisualizer"),o("OutboundLink")],1)])]),t._v(" "),o("li",[o("p",[t._v("Open the project in Intellij")])])]),t._v(" "),o("h2",{attrs:{id:"usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),o("ol",[o("li",[t._v("Open the project in Intellij\n"),o("ul",[o("li",[t._v("Android Studio is very similar to Intellij so you should be familiar with the interface")])])]),t._v(" "),o("li",[t._v("You should just be able to press the play button up top without any problems")])]),t._v(" "),o("figure",{attrs:{align:"center"}},[o("img",{attrs:{src:a(407),alt:"Screenshot of RRPathVisualizer open in Intellij"}}),t._v(" "),o("figcaption",{staticClass:"mt-2 text-gray-600 text-center"},[t._v("Peep the play button 👀")])]),t._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[t._v("You may have to set the project SDK\n"),o("ul",[o("li",[t._v("If so, go to the File > Project Structure")]),t._v(" "),o("li",[t._v('Find the "Project SDK" setting. Select the latest JDK version installed. Intellij should come bundled with JDK 14')])])]),t._v(" "),o("li",[t._v("To make your paths, open the "),o("code",[t._v("TrajectoryGen.kt")]),t._v(" file")]),t._v(" "),o("li",[t._v("Ensure that the "),o("code",[t._v("driveConstraints")]),t._v(" values matches the "),o("code",[t._v("DriveConstraints")]),t._v(" you have in your own Road Runner setup on your bot")]),t._v(" "),o("li",[t._v("Ensure that the "),o("code",[t._v("trackWidth")]),t._v(" value matches the "),o("code",[t._v("TRACK_WIDTH")]),t._v(" value in your "),o("code",[t._v("DriveConstants.java")]),t._v(" file. This ensures more accurate trajectory length estimates")]),t._v(" "),o("li",[t._v("Find "),o("code",[t._v("builder1")]),t._v(". The "),o("code",[t._v("builder1")]),t._v(" object is the example "),o("code",[t._v("TrajectoryBuilder")]),t._v(" provided. You are free to add more builders for more trajectories")]),t._v(" "),o("li",[t._v("Just use the builder as you would normally create trajectories")]),t._v(" "),o("li",[t._v("You can add more trajectories by calling "),o("code",[t._v("list.add(trajectory)")])]),t._v(" "),o("li",[o("strong",[t._v("NOTE:")]),t._v(" RRPathViz cannot simulate point turns.")])]),t._v(" "),o("h2",{attrs:{id:"note"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note:")]),t._v(" "),o("p",[t._v("On your actual bot, each trajectory will have a 0.5s timeout after the bot is done following it. This is to allow for any correction with the translational and heading PID if your bot strays off the path. This timeout is cut short if your bot is able to reach the end of the trajectory without correction. Thus, each trajectory may have up to 0.5s added on to it. This extra time is not reflected in RRPathVisualizer's trajectory time estimate. Just be aware of this timeout when creating your trajectories. You are able to change the duration of this correction timeout in the quickstart. If you'd like to do so, change the last parameter, the one with the 0.5 value, where "),o("code",[t._v("follower")]),t._v(" is set to "),o("code",[t._v("HolonomicPIDVAFollower")]),t._v(" in "),o("code",[t._v("SampleMecanumDrive.java")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),o("p",[t._v("Video from Bots in Black, team 16633, explaining installation, basic troubleshooting, and basic usage of RRPathVisualizer:")]),t._v(" "),o("div",{staticClass:"flex justify-center"},[o("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/70mOwbp6ANs",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])}),[],!1,null,null,null);e.default=r.exports}}]);