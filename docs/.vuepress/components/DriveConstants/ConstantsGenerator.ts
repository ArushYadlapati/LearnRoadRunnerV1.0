import ConfigurationState, { ChassisEnum } from "./ConfigurationState";

interface ConstantProperties {
  ticksPerRev: number;
  maxRPM: number;

  runUsingEncoder: boolean;

  wheelRadius: number;
  gearRatio: number;
  trackWidth: number;

  recommendedVelo: number;
  recommendedAccel: number;

  limitedVelo: number;
  limitedAccel: number;

  maxVel: number;
  maxAccel: number;
}

const StraferV1Constants: ConstantProperties = {
  ticksPerRev: 383.6,
  maxRPM: 435,

  runUsingEncoder: true,

  wheelRadius: 1.9685,
  gearRatio: 0.5,

  trackWidth: 15.8,

  recommendedVelo: (435 / 60) * 0.5 * 1.9685 * 2 * Math.PI * 0.85,
  recommendedAccel: (435 / 60) * 0.5 * 1.9685 * 2 * Math.PI * 0.85,

  limitedVelo: (435 / 60) * 0.5 * 1.9685 * 2 * Math.PI * 0.85,
  limitedAccel: (435 / 60) * 0.5 * 1.9685 * 2 * Math.PI * 0.85,

  maxVel: (435 / 60) * 0.5 * 1.9685 * 2 * Math.PI,
  maxAccel: (435 / 60) * 0.5 * 1.9685 * 2 * Math.PI,
};

const StraferV3Constants: ConstantProperties = {
  ticksPerRev: 537.6,
  maxRPM: 312,

  runUsingEncoder: true,

  wheelRadius: 1.88976,
  gearRatio: 1,

  trackWidth: 16.34,

  recommendedVelo: (312 / 60) * 1.88976 * 2 * Math.PI * 0.85,
  recommendedAccel: (312 / 60) * 1.88976 * 2 * Math.PI * 0.85,

  limitedVelo: (312 / 60) * 1.88976 * 2 * Math.PI * 0.85,
  limitedAccel: (312 / 60) * 1.88976 * 2 * Math.PI * 0.85,

  maxVel: (312 / 60) * 1.88976 * 2 * Math.PI,
  maxAccel: (312 / 60) * 1.88976 * 2 * Math.PI,
};

function generateText(filledProperties: ConstantProperties): string {
  return `package org.firstinspires.ftc.teamcode.drive;

import com.acmerobotics.dashboard.config.Config;
import com.qualcomm.robotcore.hardware.PIDFCoefficients;

/*
 * Constants shared between multiple drive types.
 *
 * Constants generated by LearnRoadRunner.com/drive-constants
 *
 * TODO: Tune or adjust the following constants to fit your robot. Note that the non-final
 * fields may also be edited through the dashboard (connect to the robot's WiFi network and
 * navigate to https://192.168.49.1:8080/dash). Make sure to save the values here after you
 * adjust them in the dashboard; **config variable changes don't persist between app restarts**.
 *
 * These are not the only parameters; some are located in the localizer classes, drive base classes,
 * and op modes themselves.
 */
@Config
public class DriveConstants {

    /*
     * These are motor constants that should be listed online for your motors.
     */
    public static final double TICKS_PER_REV = ${filledProperties.ticksPerRev};
    public static final double MAX_RPM = ${filledProperties.maxRPM};

    /*
     * Set RUN_USING_ENCODER to true to enable built-in hub velocity control using drive encoders.
     * Set this flag to false if drive encoders are not present and an alternative localization
     * method is in use (e.g., tracking wheels).
     *
     * If using the built-in motor velocity PID, update MOTOR_VELO_PID with the tuned coefficients
     * from DriveVelocityPIDTuner.
     */
    public static final boolean RUN_USING_ENCODER = ${
      filledProperties.runUsingEncoder
    };
    public static PIDFCoefficients MOTOR_VELO_PID = new PIDFCoefficients(0, 0, 0,
      getMotorVelocityF(MAX_RPM / 60 * TICKS_PER_REV));

    /*
     * These are physical constants that can be determined from your robot (including the track
     * width; it will be tune empirically later although a rough estimate is important). Users are
     * free to chose whichever linear distance unit they would like so long as it is consistently
     * used. The default values were selected with inches in mind. Road runner uses radians for
     * angular distances although most angular parameters are wrapped in Math.toRadians() for
     * convenience. Make sure to exclude any gear ratio included in MOTOR_CONFIG from GEAR_RATIO.
     */
    public static double WHEEL_RADIUS = ${filledProperties.wheelRadius}; // in
    public static double GEAR_RATIO = ${
      filledProperties.gearRatio
    }; // output (wheel) speed / input (motor) speed
    public static double TRACK_WIDTH = ${filledProperties.trackWidth}; // in

    /*
     * These are the feedforward parameters used to model the drive motor behavior. If you are using
     * the built-in velocity PID, *these values are fine as is*. However, if you do not have drive
     * motor encoders or have elected not to use them for velocity control, these values should be
     * empirically tuned.
     */
    public static double kV = 1.0 / rpmToVelocity(MAX_RPM);
    public static double kA = 0;
    public static double kStatic = 0;

    /*
     * These values are used to generate the trajectories for you robot. To ensure proper operation,
     * the constraints should never exceed ~80% of the robot's actual capabilities. While Road
     * Runner is designed to enable faster autonomous motion, it is a good idea for testing to start
     * small and gradually increase them later after everything is working. All distance units are
     * inches.
     */
    /*
     * Note from LearnRoadRunner.com:
     * The velocity and acceleration constraints were calculated based on the following equation:
     * ((MAX_RPM / 60) * GEAR_RATIO * WHEEL_RADIUS * 2 * Math.PI) * 0.85
     * Resulting in ${filledProperties.recommendedVelo} in/s.
     * This is only 85% of the theoretical maximum velocity of the bot, following the recommendation above.
     * This is capped at 85% because there are a number of variables that will prevent your bot from actually
     * reaching this maximum velocity: voltage dropping over the game, bot weight, general mechanical inefficiencies, etc.
     * However, you can push this higher yourself if you'd like. Perhaps raise it to 90-95% of the theoretically 
     * max velocity. The theoretically maximum velocity is ${
       filledProperties.maxVel
     } in/s.
     * Just make sure that your bot can actually reach this maximum velocity. Path following will be detrimentally
     * affected if it is aiming for a velocity not actually possible.
     * 
     * The maximum acceleration is somewhat arbitrary and it is recommended that you tweak this yourself based on
     * actual testing. Just set it at a reasonable value and keep increasing until your path following starts
     * to degrade. As of now, it simply mirrors the velocity, resulting in ${
       filledProperties.recommendedAccel
     } in/s/s
     *
     * Maximum Angular Velocity is calculated as: maximum velocity / trackWidth * (180 / Math.PI) but capped at 360°/s.
     * You are free to raise this on your own if you would like. It is best determined through experimentation.
     ${
       filledProperties.limitedVelo < filledProperties.recommendedVelo
         ? `*
     * WARNING: LearnRoadRunner.com's constant generator has capped the calculated recommended velocity at 90in/s.
     * This message is showing because your gear ratio/motor RPM/etc. configuration, results in a recommended
     * velocity (85% of max velocity) exceeding 90in/s.
     * (Your recommended velocity was ${filledProperties.recommendedVelo}in/s)
     * This is simply insanely fast for an FTC bot and chances are your bot cannot properly reach these speeds.
     * 
     * Just to be safe, LearnRoadRunner.com has arbitrarily limited your velocity to 90in/s.
     * You are free to increase it yourself. If you do run into issues, please lower the maximum velocity.
     * 
     * A documented case of a similar error which served as an impetus for this reasoning can be found here:
     * https://github.com/acmerobotics/road-runner-quickstart/issues/91
     `
         : ""
     }
     */
    public static double MAX_VEL = ${filledProperties.limitedVelo};
    public static double MAX_ACCEL = ${filledProperties.limitedAccel};
    public static double MAX_ANG_VEL = Math.toRadians(${Math.min(
      (filledProperties.limitedVelo / filledProperties.trackWidth) *
        (180 / Math.PI),
      360
    )});
    public static double MAX_ANG_ACCEL = Math.toRadians(${Math.min(
      (filledProperties.limitedVelo / filledProperties.trackWidth) *
        (180 / Math.PI),
      360
    )});


    public static double encoderTicksToInches(double ticks) {
        return WHEEL_RADIUS * 2 * Math.PI * GEAR_RATIO * ticks / TICKS_PER_REV;
    }

    public static double rpmToVelocity(double rpm) {
        return rpm * GEAR_RATIO * 2 * Math.PI * WHEEL_RADIUS / 60.0;
    }

    public static double getMotorVelocityF(double ticksPerSecond) {
      // see https://docs.google.com/document/d/1tyWrXDfMidwYyP_5H4mZyVgaEswhOC35gvdmP-V-5hA/edit#heading=h.61g9ixenznbx
      return 32767 / ticksPerSecond;
    }
}`;
}

export function generateFile(properties: ConfigurationState): string {
  if (properties.chassisSelected == ChassisEnum.STRAFER_V1_CHASSIS)
    return generateText(StraferV1Constants);
  else if (properties.chassisSelected == ChassisEnum.STRAFER_V3_CHASSIS)
    return generateText(StraferV3Constants);

  const buildConstants: ConstantProperties = {
    ticksPerRev: 0,
    maxRPM: 0,

    runUsingEncoder: true,

    wheelRadius: 0,
    gearRatio: 0,

    trackWidth: 0,

    recommendedVelo: 0,
    recommendedAccel: 0,

    limitedVelo: 0,
    limitedAccel: 0,

    maxVel: 0,
    maxAccel: 0,
  };

  if (!properties.customMotorSelected) {
    buildConstants.ticksPerRev = properties.motorSelected.ticksPerRev;
    buildConstants.maxRPM = properties.motorSelected.maxRPM;
  } else {
    buildConstants.ticksPerRev = properties.ticksPerRev;
    buildConstants.maxRPM = properties.maxRPM;
  }

  buildConstants.runUsingEncoder = properties.runUsingEncoder;

  buildConstants.wheelRadius = properties.wheelRadius;
  buildConstants.gearRatio = properties.gearRatio;
  buildConstants.trackWidth = properties.trackWidth;

  buildConstants.recommendedVelo =
    (buildConstants.maxRPM / 60) *
    buildConstants.gearRatio *
    buildConstants.wheelRadius *
    2 *
    Math.PI *
    0.85;
  buildConstants.recommendedAccel =
    (buildConstants.maxRPM / 60) *
    buildConstants.gearRatio *
    buildConstants.wheelRadius *
    2 *
    Math.PI *
    0.85;

  buildConstants.maxVel =
    (buildConstants.maxRPM / 60) *
    buildConstants.gearRatio *
    buildConstants.wheelRadius *
    2 *
    Math.PI;
  buildConstants.maxAccel =
    (buildConstants.maxRPM / 60) *
    buildConstants.gearRatio *
    buildConstants.wheelRadius *
    2 *
    Math.PI;

  // Arbitrarily limit max velo/accel to 90in/s because someone ran into an issue
  // where their gear ratio was insanely low thus their bot was reallllly fast.
  // The generated velo/accel was simply too high.
  // Issue reported here: https://github.com/acmerobotics/road-runner-quickstart/issues/91
  buildConstants.limitedVelo = Math.min(buildConstants.recommendedVelo, 90);
  buildConstants.limitedAccel = Math.min(buildConstants.recommendedAccel, 90);

  return generateText(buildConstants);
}
