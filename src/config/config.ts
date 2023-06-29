export const getBaseURL = (suffix:String) =>
{
    var baseUrl = process.env.NODE_ENV === "production" ? "" : "http://localhost:8080/v1";
    return baseUrl + "/" + suffix;
}