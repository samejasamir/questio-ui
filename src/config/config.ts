const getBaseURL = () =>
{
    return process.env.NODE_ENV === "production" ? "" : "http://localhost:8080";
}