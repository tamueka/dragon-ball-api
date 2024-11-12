import React from "react";
import styled from "@emotion/styled";

export const Footer: React.FC = () => {
  return (
    <FooterStyles>
      <FooterSection>
        <FooterTitle>Links</FooterTitle>
        <FooterLink href="#home">Inicio</FooterLink>
        <FooterLink href="#about">Sobre Nosotros</FooterLink>
        <FooterLink href="#services">Servicios</FooterLink>
        <FooterLink href="#contact">Contacto</FooterLink>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Contacto</FooterTitle>
        <FooterText>Teléfono: +123 456 789</FooterText>
        <FooterText>Email: info@ejemplo.com</FooterText>
        <FooterText>Dirección: Calle Falsa 123</FooterText>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Síguenos</FooterTitle>
        <SocialMediaContainer>
          <SocialMediaIcon href="https://facebook.com" target="_blank">
            Fb
          </SocialMediaIcon>
          <SocialMediaIcon href="https://twitter.com" target="_blank">
            Tw
          </SocialMediaIcon>
          <SocialMediaIcon href="https://instagram.com" target="_blank">
            Ig
          </SocialMediaIcon>
        </SocialMediaContainer>
      </FooterSection>
    </FooterStyles>
  );
};

const FooterStyles = styled.footer`
  margin-top: 40px;
  background-color: #333; /* Fondo oscuro */
  color: #f5f5f5; /* Texto claro */
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FooterTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 16px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

const FooterLink = styled.a`
  color: #bbb;
  margin-bottom: 8px;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #3b82f6; /* Color de enlace en hover */
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 5px 0;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialMediaIcon = styled.a`
  color: #bbb;
  font-size: 20px;
  transition: color 0.3s;

  &:hover {
    color: #3b82f6; /* Color en hover */
  }
`;
