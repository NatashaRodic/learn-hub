import * as applicationAPI from './applications-api';

export async function createApplication(applicationData) {
    try {
        const response = await applicationAPI.submitApplication(applicationData);
        console.log('Application submitted successfully:', response);
        return response;
    } catch (error) {
        console.error('Error submitting application:', error);
        throw error;
    }
}