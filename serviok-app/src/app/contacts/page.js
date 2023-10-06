"use client"
import {POST} from '../api/contacts/route';
import {TextField} from "@mui/material";
import {Button, Card, CardContent} from "@mui/material";
function demandeForm () {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            nom: event.target.nom.value,
            prenom: event.target.prenom.value,
            email: event.target.email.value,
            demande: event.target.demande.value,
        };
        try{
            const response = await POST({
                json:() => Promise.resolve(formData),
            });
            console.log(response)
        }catch (error){
            console.error(error)
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Card>
                    <h1>Contacts</h1>
                    <CardContent>
                        <div>
                            <TextField
                                id="nom"
                                label="nom"
                                variant="outlined"
                                name="nom"
                                style={{ marginBottom: '10px' }}
                                fullWidth
                            />
                            <TextField
                                id="prenom"
                                label="prenom"
                                variant="outlined"
                                name="prenom"
                                style={{ marginBottom: '10px' }}
                                fullWidth
                            />
                            <TextField
                                id="email"
                                label="email"
                                variant="outlined"
                                name="email"
                                style={{ marginBottom: '10px' }}
                                fullWidth
                            />
                            <TextField
                                id="demande"
                                label="demande"
                                multiline
                                rows={6}
                                name="demande"
                                style={{ marginBottom: '10px' }}
                                fullWidth
                            />
                        </div>
                    </CardContent>
                    <Button variant="contained" type="submit">Send</Button>
                </Card>
            </div>
        </form>
    )
 }
 export default demandeForm;

