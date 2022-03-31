import {Construct, Stack, StackProps } from '@aws-cdk/core';
// import { Construct } from 'constructs';
// import { aws_s3 as s3 } from 'aws-cdk-lib';
import { Bucket } from '@aws-cdk/aws-s3';
import { RemovalPolicy } from 'aws-cdk-lib';
import { env } from 'process';

export var name=env["projectName"] as string;
console.log(env["projectName"],"lkjk;l");
if (name==undefined){throw new TypeError("no env var projectName")}
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkTestingStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, name,{
      bucketName:name,
      removalPolicy:RemovalPolicy.DESTROY
    });

  }
}
