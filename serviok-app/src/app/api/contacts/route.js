import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const json = await request.json();
        const response = await fetch('http://localhost:3031/contatos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(json),
        });

        if (response.status === 201) {
            const createdDemande = await response.json();

            let json_response = {
                status: 'success',
                data: {
                    demande: createdDemande,
                },
            };

            // Return a NextResponse with the JSON response
            return new NextResponse(JSON.stringify(json_response), {
                status: 201,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            let error_response = {
                status: 'fail',
                message: 'falha ao criar demande',
            };

            // Return an error response with the JSON error message
            return new NextResponse(JSON.stringify(error_response), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        let error_response = {
            status: 'error',
            message: error.message,
        };

        // Return an error response with the JSON error message
        return new NextResponse(JSON.stringify(error_response), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
