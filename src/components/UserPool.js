import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: "us-east-1_yGfaFiKkr",
    ClientId: "6mrllsg6k31ls7c9ktbp9fidqu"
}

export default new CognitoUserPool(poolData);