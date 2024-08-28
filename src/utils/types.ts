export interface Mail {
    fromEmail: string;
    subject: string;
    sentAt: Date;
    // status: string; // A specific type
}

export interface ApiResponse {
    success: boolean;
    data: Mail[];
    message?: string; // Optional field
}