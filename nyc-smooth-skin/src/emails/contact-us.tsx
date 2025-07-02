import {
    Body,
    Container,
    Head,
    Html,
    Markdown,
    Preview,
    Text,
} from '@react-email/components';
import { CSSProperties } from 'react';
import { ContactUs } from '../pages/ContactUs';

interface ContactUsEmailProps {
    firstname: string;
    lastname: string;
    email: string;
    subject: string;
    msg: string;
}

export const ContactUsEmail = ({
    firstname,
    lastname,
    email,
    subject,
    msg,

}: ContactUsEmailProps) => (
    <Html>
        <Head />
        <Preview>Thanks for contacting us {firstname} {lastname}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Text style={paragraph}>
                    Hi {firstname},
                </Text>
                <Text style={paragraph}>
                    We have received your message
                </Text>
                <Markdown
                    markdownContainerStyles={{
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
                        borderRadius: '8px',
                        padding: '20px',
                        backgroundColor: '#f3f4f6',
                        border: '1px solid #e5e7eb',
                    }}
                >
                    {msg}
                </Markdown>
                <Text style={paragraph}>
                    We will get back to you as soon as possible at {email}.
                </Text>
            </Container>
        </Body>
    </Html>
);

const main: CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
    fontFamily: 'Playfair Display, serif',
};

const container: CSSProperties = {
    margin: '0 auto',
    padding: '20px 0 48px',
};

const paragraph: CSSProperties = {
    fontSize: '16px',
    lineHeight: '26px',
};