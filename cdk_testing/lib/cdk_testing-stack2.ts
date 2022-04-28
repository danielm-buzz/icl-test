import {Construct, Stack, StackProps, CfnParameter } from '@aws-cdk/core';
import { env } from 'process';
import { Queue } from '@aws-cdk/aws-sqs';


export var name=env["projectName"] as string;


export class CdkTestingStacknum2 extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);


    const name1 = new CfnParameter(this, 'name1', {
      type: 'String',
      description: 'Backet name',
      default: "demo",
      
    });

    const queue = new Queue(this, "TestQueue", {
    });

  }
}