import sendRequest from "./send-request";
const BASE_URL = '/api/courses';

export async function getAll() {
    return sendRequest(BASE_URL);
}