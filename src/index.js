const aws = require('aws-sdk')
const instancestopConfigurations = require('./../config.json')

const stopInstances = async ({ region, instanceIds }) => {
  const ec2 = new aws.EC2({ region, apiVersion: '2016-11-15' })
  const { Reservations: [{ Instances: instances }] } = await ec2.describeInstances({
    InstanceIds: instanceIds
  }).promise()

  for (const instance of instances) {
    if (instance && instance.State.Name === 'running') {
      const stopInstancesResponse = await ec2.stopInstances({ InstanceIds: instance.InstanceId }).promise()
      console.log(`instance ${instance.InstanceId} stopping:`, JSON.stringify(stopInstancesResponse))
    } else {
      console.log(`instance ${instance.InstanceId} is not even running (・・;)ゞ`)
    }
  }
}

module.exports.handler = async () => {
  for (const { region, instanceIds } of instancestopConfigurations) {
    await stopInstances({
      region,
      instanceIds
    })
  }
  return null
}
