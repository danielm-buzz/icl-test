import {Construct, Stack, StackProps } from '@aws-cdk/core';
// import { Construct } from 'constructs';
// import { aws_s3 as s3 } from 'aws-cdk-lib';
import { Bucket } from '@aws-cdk/aws-s3';
import { RemovalPolicy, Duration } from 'aws-cdk-lib';
import { env } from 'process';
import { Queue } from '@aws-cdk/aws-sqs';


export var name='sqsstack-'+env["projectName"] as string;
// console.log(name,"stack num 2");
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkTestingStacknum2 extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const queue = new Queue(this, "TestQueue", {
      queueName: name
    });

  }
}
