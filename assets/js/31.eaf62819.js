(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{404:function(t,e,a){t.exports=a.p+"assets/img/YouAreHere-SplineTest-quarter.06ce4773.png"},466:function(t,e,a){"use strict";a.r(e);var o=a(46),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"spline-test"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#spline-test"}},[t._v("#")]),t._v(" Spline Test")]),t._v(" "),o("figure",{attrs:{align:"center"}},[o("img",{attrs:{src:a(404),alt:"You are on the spline test step"}}),t._v(" "),o("figcaption",{staticClass:"mt-2 text-center text-gray-600"},[t._v("You are here")])]),t._v(" "),o("ol",[o("li",[t._v("Once your "),o("code",[t._v("TRANSLATION")]),t._v(" and "),o("code",[t._v("HEADING")]),t._v(" PID's are tuned, you should run the spline test to make sure everything is in order.")]),t._v(" "),o("li",[t._v("Open dashboard to make sure that it's following correctly. The bot should follow an S-shaped path and Dashboard should follow the path properly.")]),t._v(" "),o("li",[t._v("If your spline following seems to demonstrate slight oscillations, your p gain in either your velocity PID or your translational/heading PID is too high. You may want to go back to try and isolate this behavior.")]),t._v(" "),o("li",[t._v("If something goes wrong, try and go back to diagnose the problem. Hit up the "),o("a",{attrs:{href:"https://discord.gg/first-tech-challenge",target:"_blank",rel:"noopener noreferrer"}},[t._v("FTC Discord"),o("OutboundLink")],1),t._v(" if you're stuck.")])]),t._v(" "),o("ClientOnly",[o("div",{staticClass:"flex items-center justify-center"},[o("HoverConfetti",[t._v("🎊🎉🎊🎉 Congrats you're done! 🎊🎉🎊🎉")])],1)]),t._v(" "),o("h2",{attrs:{id:"diagnostic-tips"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#diagnostic-tips"}},[t._v("#")]),t._v(" Diagnostic Tips")]),t._v(" "),o("ul",[o("li",[t._v("Open up dashboard as your bot follows a path\n"),o("ul",[o("li",[t._v("Watch the x/y/heading error. Determine if the error is caused by the localizer or the base path follower.")])])]),t._v(" "),o("li",[t._v("Turn off the translational/heading PID\n"),o("ul",[o("li",[t._v("Set the coefficients in translational/heading PID to zero")]),t._v(" "),o("li",[t._v("If your following is okay after turning off translational/heading PID, then the problem lies in the localizer\n"),o("ul",[o("li",[t._v("Run "),o("code",[t._v("LocalizationTest")]),t._v(" and try to fix your localizer (most likely "),o("code",[t._v("StandardTrackingWheelLocalizer")]),t._v(" if you're having issues as it's quite a fickle one)")])])]),t._v(" "),o("li",[t._v("If your following is not okay even after turning off the translation/heading PID, then the error lies in the drive train motor directions or the drive constants")])])]),t._v(" "),o("li",[t._v("Work backwards and start turning things off to isolate the problem. Starting from scratch and working on each component, step by step, may lead to a faster solution")]),t._v(" "),o("li",[t._v("You can turn off the pose history limit (you'll notice that the pose history, blue line, will start clearing itself on the dashboard field to keep everything clean) by setting "),o("code",[t._v("POSE_HISTORY_LIMIT")]),t._v(" in "),o("code",[t._v("SampleMecanumDrive")]),t._v(" to -1. This will stop the blue line from slowly clearing itself and may assist in debugging.")]),t._v(" "),o("li",[t._v("Lower your velocity and acceleration constraints in "),o("code",[t._v("DriveConstants.java")]),t._v(". These constraints are meant to characterize your drive train. Specifying velocities and acceleration values that are higher than what your bot is actually able to achieve will result in motion profiles that are impossible to follow and ruin path following.\n"),o("ul",[o("li",[t._v("If you are having serious problems with your following, lower your maximum velocity and acceleration dramatically (just cut it in half) and set your angular velocity/acceleration to something low such as 60 degrees per second.")])])])]),t._v(" "),o("h2",{attrs:{id:"hiding-the-tuning-opmodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hiding-the-tuning-opmodes"}},[t._v("#")]),t._v(" Hiding the tuning opmodes")]),t._v(" "),o("p",[t._v("The Road Runner quickstart comes with many tuning opmodes. They can clutter up the RC's opmode list quite a bit, especially when you start adding many of your own opmodes. If you are finished with your tuning process, you can hide these opmodes using the "),o("code",[t._v("@Disabled")]),t._v(" annotation on your opmodes.")]),t._v(" "),o("p",[t._v("Do so by inserting the following above any of the opmode class declarations:")]),t._v(" "),o("div",{staticClass:"language-java extra-class"},[o("div",{staticClass:"highlight-lines"},[o("br"),o("div",{staticClass:"highlighted"},[t._v(" ")]),o("br"),o("br"),o("br"),o("br")]),o("pre",{pre:!0,attrs:{class:"language-java"}},[o("code",[o("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Config")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Disabled")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autonomous")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"drive"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DriveVelocityPIDTuner")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinearOpMode")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" DISTANCE "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("72")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in")]),t._v("\n")])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);