(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{461:function(e,t,a){"use strict";a.r(t);var o=a(46),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"what-is-road-runner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-road-runner"}},[e._v("#")]),e._v(" What is Road Runner?")]),e._v(" "),a("p",[e._v("Road Runner is a motion planning library, written for the "),a("a",{attrs:{href:"https://www.firstinspires.org/robotics/ftc",target:"_blank",rel:"noopener noreferrer"}},[e._v("FTC robotics competition"),a("OutboundLink")],1),e._v(". Designed primarily for autonomous robotic movement, it allows for complex path following and generation while maintaining control of velocity and acceleration. This enables bots to have more accurate and advanced path following capabilities.")]),e._v(" "),a("div",{staticClass:"flex flex-col items-center justify-center"},[a("VideoDisplay",{attrs:{src:"./assets/home/8393-half-compressed.mp4",width:"360px",controls:!1}}),e._v(" "),a("span",{staticClass:"text-sm text-center text-gray-600"},[e._v("Team 8393 performs an advanced spline path in their autonomous mode"),a("br"),e._v("(Ochoa Finals - 2018/19 Rover Ruckus)")])],1),e._v(" "),a("ActionLink",{attrs:{url:"/before-you-start",margin:"2em"}},[e._v("Get Started →")]),e._v(" "),a("h2",{attrs:{id:"frequently-asked-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[e._v("#")]),e._v(" Frequently Asked Questions")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#how-is-this-different-from-pure-pursuit"}},[e._v("How is this different from Pure Pursuit?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#what-are-dead-wheels-odometry"}},[e._v("What are dead wheels/odometry?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#what-are-spline-paths"}},[e._v("What are spline paths?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#can-i-change-the-default-units"}},[e._v("Can I change the default units?")])])]),e._v(" "),a("h3",{attrs:{id:"how-is-this-different-from-pure-pursuit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-is-this-different-from-pure-pursuit"}},[e._v("#")]),e._v(" How is this different from Pure Pursuit?")]),e._v(" "),a("p",[e._v("While often compared with each other, pure pursuit is very different from Road Runner and should not be contrasted. "),a("a",{attrs:{href:"https://www.mathworks.com/help/robotics/ug/pure-pursuit-controller.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pure Pursuit"),a("OutboundLink")],1),e._v(" is a path tracking and following algorithm that allows non-holonomic drive trains to follow multi-dimensional paths through the use of a look-ahead point. On the other hand, Road Runner includes multiple path following algorithms from "),a("a",{attrs:{href:"https://github.com/wpilibsuite/allwpilib/blob/master/wpilibj/src/main/java/edu/wpi/first/wpilibj/controller/RamseteController.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ramsete"),a("OutboundLink")],1),e._v(" to guided vector fields. The default pure pursuit algorithm lacks motion profiling, meaning it has no velocity or acceleration constraints. Because pure pursuit has no acceleration control, installing dead wheel odometry on your bot is a must. Both tools can be used to follow complex paths.")]),e._v(" "),a("p",[e._v("Tangentially related but the use of Pure Pursuit really isn't recommended for most FTC uses. The majority of FTC bots tend to be holonomic drive (mecanum). Pure Pursuit was designed for differential drive (tank). Even for differential drive, pure pursuit is inferior to a controller like Ramsete. It is really only justified in the event that you do not have and do not want to create a path generator. Please check out the "),a("a",{attrs:{href:"https://discord.gg/first-tech-challenge",target:"_blank",rel:"noopener noreferrer"}},[e._v("FTC Discord"),a("OutboundLink")],1),e._v(" for further information on this topic.")]),e._v(" "),a("h3",{attrs:{id:"what-are-dead-wheels-odometry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-dead-wheels-odometry"}},[e._v("#")]),e._v(" What are dead wheels/odometry?")]),e._v(" "),a("p",[e._v("Although in the FTC community dead wheels and odometry are often used synonymously, they are very different things. Odometry refers to the use of sensors to determine a robot's position. Dead wheels (sometimes referred to as odometry wheels or odometry pods) are unpowered omni wheels not connected to any motor. These wheels have rotary encoders to track distance traveled. This data is fed through a kinematic equation and integrated to calculate the relative position of the robot on the field. The advantage of using dead wheels over drive wheel odometry is that dead wheels experience very little slip compared to mecanum wheels. This improves the accuracy signifcantly when using a mecanum drive, especially in instances of high acceleration. Dead wheels are not necessary for a differential drive (tank drive) due to the little slip experienced (this is actually anecdotal data. I cannnot back this statement with anything objective).")]),e._v(" "),a("p",[a("strong",[e._v("TL;DR")]),e._v(" Dead wheels allow accurate positional tracking of mecanum drives at high speeds and accelerations. Check out "),a("a",{attrs:{href:"https://gm0.org/en/latest/docs/robot-design/dead-wheels.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("gm0's section on odometry"),a("OutboundLink")],1),e._v(" for more detailed information!")]),e._v(" "),a("figure",{attrs:{align:"center"}},[a("img",{staticClass:"rounded-lg",attrs:{src:"https://cdn.statically.io/gh/NoahBres/LearnRoadRunner/1c0fe8d5/docs/assets/home/dead-wheel-example.jpg",width:"400",alt:"Underside of a bot with dead wheels highlighted"}}),e._v(" "),a("figcaption",{staticClass:"mt-2 text-sm text-center text-gray-600"},[e._v("An example of dead wheels")])]),e._v(" "),a("h3",{attrs:{id:"what-is-the-difference-between-two-and-three-wheel-odometry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-difference-between-two-and-three-wheel-odometry"}},[e._v("#")]),e._v(" What is the difference between two and three wheel odometry?")]),e._v(" "),a("p",[a("strong",[e._v("TL;DR")]),e._v(" Three-wheel configuration reduces loop times resulting in less drift and higher accuracy.")]),e._v(" "),a("p",[e._v("As explained above, the standard dead wheel configuration involves the use of multiple, unpowered omni wheels connected to encoders. However, you can choose to either use two or three omni wheels. The two-wheel configuration uses two dead wheels, perpendicular to each other. One wheel is used to track displacement in the x (forward) direction and one in the y (strafe) direction. Heading is measured through a gryoscope, whether it be in the Rev Expansion/Control Hub IMU or an external sensor. The three-wheel configuration uses two parallel wheels and one perpendicular wheel. The two parallel wheels track both x (forward) movement and heading. Heading is calculated through the offset of the two parallel wheels. The perpendicular wheel tracks movement in the y (strafe) direction.")]),e._v(" "),a("p",[e._v("So you ask yourself, "),a("strong",[e._v("why would I choose the three wheel configuration?")]),e._v(' "That\'s another module that I have to make and increases cost by ~30%!" At the time of writing, the three-wheel configuration is the most accurate option. This is because the Rev Expansion/Control Hub utilizes a slow I2C implementation which results in about 7ms per I2C call. The BNO055 IMU onboard the Rev Expansion/Control Hub communicates via I2C. This will contribute a signficant amount of delay to your loop times which reduces integration accuracy (the 7ms is in addition to the 3ms call for all dead wheels assuming bulk reads, so 10ms). To calculate the heading with a two-wheel configuration, it must call on this slow IMU for heading. A three-wheel configuration calculates heading via the two parallel wheels, which eliminates the 7ms I2C call. Since all three of your dead wheels can be read in 3ms (assuming bulk reads and that all your encoders are on one Rev Expansion/Control Hub), the loop time is greatly reduced. This has been seen to improve accuracy and reduce drift significantly. The upcoming Control Hubs, which perform the I/O at a 3x faster rate than the Expansion Hub, may reduce this difference between the two set-ups.')]),e._v(" "),a("p",[a("em",[e._v("Note: Some teams, such as 8802 Negative Resistance, have utilized the two-wheel configuration with great success.")])]),e._v(" "),a("h3",{attrs:{id:"how-do-i-make-dead-wheels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-make-dead-wheels"}},[e._v("#")]),e._v(" How do I make dead wheels?")]),e._v(" "),a("p",[e._v("Hit up the "),a("a",{attrs:{href:"https://discord.gg/first-tech-challenge",target:"_blank",rel:"noopener noreferrer"}},[e._v("FTC Discord"),a("OutboundLink")],1),e._v(" for further details. There are many intricacies and options into building dead wheel modules. There are very few resources to creating dead wheels module at the time of writing. You can expect each module to cost $30+. Thus, you can expect a three-wheel configuration to cost upwards of $100.")]),e._v(" "),a("p",[e._v("Good open source design for a dead wheel design: "),a("a",{attrs:{href:"https://openodometry.weebly.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://openodometry.weebly.com/"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"what-are-spline-paths"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-spline-paths"}},[e._v("#")]),e._v(" What are spline paths?")]),e._v(" "),a("p",[e._v("Spline paths are trajectories generated using "),a("a",{attrs:{href:"https://www.wikiwand.com/en/Spline_(mathematics)",target:"_blank",rel:"noopener noreferrer"}},[e._v("spline curves"),a("OutboundLink")],1),e._v(". Spline curves are piecewise polynomials that connect multiple points in a continuous (smooth) fashion. These benefit autonomous trajectories because it allows an object to follow a path while changing heading without making a point turn. Spline curves are ideal for non-holonomic drive trains. For Road Runner you will find that spline paths will be utilized frequently as it allows for continuous paths (connecting straight lines will break path continuity, we'll worry about that later 😉).")]),e._v(" "),a("h3",{attrs:{id:"can-i-change-the-default-units"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-change-the-default-units"}},[e._v("#")]),e._v(" Can I change the default units?")]),e._v(" "),a("p",[e._v("From the "),a("a",{attrs:{href:"https://acme-robotics.gitbook.io/road-runner/quickstart/faq",target:"_blank",rel:"noopener noreferrer"}},[e._v("official Road Runner FAQ"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("blockquote",[a("p",[e._v("Inches are strongly recommended. If you really want to use other units, write your own adapters/wrappers for the Road Runner interfaces. Many important defaults are set with inches in mind, and it's difficult to change some from the high-level API.")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);