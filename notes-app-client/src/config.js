export default {
    s3: {
        //REGION: "us-east-1",
        REGION: "ap-south-1",
        BUCKET: "local-notes-app-uploads"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://ly55wbovq4.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "ap-south-1",
        USER_POOL_ID: "ap-south-1_GhMdOWkzj",
        APP_CLIENT_ID: "q9nhalj5gqs5tub35evrln6ok",
        IDENTITY_POOL_ID: "ap-south-1:00687330-e704-4ea4-bed3-c79d94ea0b2e"
    },
    MAX_ATTACHMENT_SIZE: 5000000,
};