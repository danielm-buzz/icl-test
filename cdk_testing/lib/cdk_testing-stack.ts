import {CfnParameter,Construct, Stack, StackProps } from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';
import {  RemovalPolicy } from 'aws-cdk-lib';
import { env } from 'process';

export var name=env["projectName"] as string;


export class CdkTestingStack extends Stack {
  
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);



    const name1 = new CfnParameter(this, 'name1', {
      type: 'String',
      description: 'Backet name',
      default: "demo",
      
    });

// console.log(name1.valueAsString)
    const bucket = new Bucket(this, "Backet",{
      removalPolicy:RemovalPolicy.DESTROY
    });

  }
}