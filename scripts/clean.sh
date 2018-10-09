#!/bin/bash
rm -rf /home/ec2-user/restApi/*
ec2-dns=`aws ec2 describe-instances --filters 'Name=tag:Name,Values=cicd-demo' --output text --query 'Reservations[*].Instances[*].PublicDnsName' --region us-east-1`
EXPORT EC2_DNS=ec2-dns