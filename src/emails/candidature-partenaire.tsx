import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components'

// Version autonome pour rio-uncovered : pas de dépendance à ../registry
// (qui n'existe que côté jeitinho.fr). Le type TemplateEntry est redéfini
// localement, allégé aux seuls champs réellement utilisés ici.

interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  displayName?: string
  previewData?: Record<string, any>
  to?: string
}

interface Props {
  etablissement?: string
  responsable?: string
  email?: string
  telephone?: string
  summary?: Array<{ label: string; value: string }>
  message?: string | null
}

const Email = ({
  etablissement = '',
  responsable = '',
  email = '',
  telephone = '',
  summary = [],
  message,
}: Props) => {
  return (
    <Html lang="fr" dir="ltr">
      <Head />
      <Preview>Nouvelle candidature partenaire — {etablissement || responsable}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={brand}>JEITINHO — INTERNE</Heading>
          <Hr style={hr} />
          <Heading style={h1}>Nouvelle candidature partenaire</Heading>
          <Text style={tag}>Portail Partenaires</Text>

          <Section style={card}>
            <Text style={cardLabel}>Contact</Text>
            {etablissement ? (
              <Text style={cardLine}><strong>Établissement :</strong> {etablissement}</Text>
            ) : null}
            {responsable ? (
              <Text style={cardLine}><strong>Responsable :</strong> {responsable}</Text>
            ) : null}
            {email ? (
              <Text style={cardLine}>
                <strong>Email :</strong>{' '}
                <a href={`mailto:${email}`} style={link}>{email}</a>
              </Text>
            ) : null}
            {telephone ? (
              <Text style={cardLine}>
                <strong>Téléphone :</strong>{' '}
                <a href={`tel:${telephone.replace(/\s+/g, '')}`} style={link}>{telephone}</a>
              </Text>
            ) : null}
          </Section>

          {summary.length > 0 ? (
            <Section style={card}>
              <Text style={cardLabel}>Détails</Text>
              {summary.map((row, i) => (
                <Text key={i} style={cardLine}>
                  <strong>{row.label} :</strong> {row.value}
                </Text>
              ))}
            </Section>
          ) : null}

          {message ? (
            <Section style={card}>
              <Text style={cardLabel}>Message</Text>
              <Text style={cardLine}>{message}</Text>
            </Section>
          ) : null}

          <Hr style={hr} />
          <Text style={footer}>
            Email automatique envoyé par le portail partenaires de blog.jeitinho.fr — répondez
            directement au professionnel en utilisant son adresse ci-dessus.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: Email,
  subject: (data: Record<string, any>) => {
    const name = data.etablissement || data.responsable || ''
    return name ? `🔔 Candidature partenaire — ${name}` : `🔔 Nouvelle candidature partenaire`
  },
  displayName: 'Notification équipe — candidature partenaire',
  to: 'blog@jeitinho.fr',
  previewData: {
    etablissement: 'Barraca do Zé',
    responsable: 'José da Silva',
    email: 'jose@example.com',
    telephone: '+55 21 99999-0000',
    summary: [
      { label: 'Catégorie', value: 'Barraca de praia' },
      { label: 'Quartier', value: 'Ipanema' },
      { label: 'Langues parlées', value: 'Português, English' },
    ],
    message: 'Intéressé pour une visibilité auprès des voyageurs francophones.',
  },
} satisfies TemplateEntry

export default Email

// Styles identiques à ceux du template "Nouvelle demande" de jeitinho.fr — cohérence visuelle garantie
const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif", color: '#1a1410' }
const container = { padding: '32px 28px', maxWidth: '560px' }
const brand = { fontSize: '14px', letterSpacing: '0.3em', color: '#5a3d2b', fontWeight: 500 as const, margin: 0 }
const hr = { borderColor: '#ecdfd0', margin: '20px 0' }
const h1 = { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '26px', color: '#3b2a1d', margin: '8px 0 4px', fontWeight: 500 as const }
const tag = { fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: '#c97b4a', margin: '0 0 18px' }
const card = { backgroundColor: '#f7f0e3', borderRadius: '6px', padding: '14px 18px', margin: '8px 0 14px' }
const cardLabel = { fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: '#8a6a52', margin: '0 0 8px' }
const cardLine = { fontSize: '14px', color: '#3b2a1d', margin: '4px 0', lineHeight: '1.5' }
const link = { color: '#c97b4a', textDecoration: 'underline' }
const footer = { fontSize: '12px', color: '#8a6a52', margin: '12px 0 0' }
