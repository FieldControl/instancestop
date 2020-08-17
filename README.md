<div align="center">
  <h1>Instancestop</h1>
  <p>

:stop_sign: Instancestop is a simpler alternative to [AWS Instance Scheduler](https://aws.amazon.com/solutions/implementations/instance-scheduler) to easily configure ec2 stop schedules

  </p>
  <p>

![Field Control ♥](https://img.shields.io/badge/Field%20Control-%20%20%20%20%20%20♥-blue.svg)
![Continuous Integration](https://github.com/FieldControl/instancestop/workflows/Continuous%20Integration/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/fa5803692ceef5c35479/maintainability)](https://codeclimate.com/github/FieldControl/instancestop/maintainability)
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

  </p>
  <small>
    Built with ❤ by 
      <a href="https://github.com/FieldControl">FieldControl</a> and
      <a href="https://github.com/FieldControl/instancestop/graphs/contributors">contributors</a> - <a href="https://fieldcontrol.com.br/vaga-para-desenvolvedor.html?utm_source=github&utm_medium=opensource&utm_campaign=instancestop">We are hiring</a>
  </small>
</div>

## Why

Because sometimes we forget ec2 instances running, and it cost us money :money_with_wings:

<div align="center">💙</div>

## Usage

1 - The first step is to clone this repository:

```sh
git clone https://github.com/FieldControl/instancestop.git
```

2 - Configure instances you would like to stop at `config.json`:

```json
[{
    "region": "us-east-1",
    "instanceIds": [
        "i-00879a71220ef415c"
    ]
}]
```

3 - Configure **when** instancestop should run on `serverless.yml`:

```yml
events:
  - schedule:
      name: instancestop-stop-ec2-evening
      description: 'Instancestop AWS CloudWatch trigger to stop instances'
      rate: cron(0 21 ? * * *) # <--- use cron syntax 
      enabled: true
```

4 - Deploy 

```sh
npm install -g serverless # if not installed
sls deploy
```

<div align="center">💙</div>

## Pull Requests

- **Add tests!** Your patch won't be accepted if it doesn't have tests.
- **Document any change in behaviour**. Make sure the README and any other
  relevant documentation are kept up-to-date.
- **Create topic branches**. Don't ask us to pull from your master branch.
- **One pull request per feature**. If you want to do more than one thing, send
  multiple pull requests.

<div align="center">💙</div>

## License

This project is licensed under the [Apache License, Version 2.0](https://opensource.org/licenses/Apache-2.0) - see the [LICENSE](LICENSE) file for details.

<div align="center">
  <br/>
  <br/>
  <br/>
  <br/>
</div>

<div align="center">
  <p>
    <sub>
      Open source, from <a href="https://instagram.com/fieldcontrolapp" target="_blank">Field Control</a> with ❤ - <a href="https://fieldcontrol.com.br/vaga-para-desenvolvedor.html?utm_source=github&utm_medium=opensource&utm_campaign=instancestop">We are hiring!</a>
    </sub>
  </p> 
</div>
