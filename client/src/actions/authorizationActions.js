import { TEST_DISPATCH } from './types';

// Register new user, export function returning type
export const registerUser =(userData) => {
    return {
        type: TEST_DISPATCH,
        payload: userData
    };
};