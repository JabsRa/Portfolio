import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import {FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                  <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to='/signin'>About us</FooterLink>
                            <FooterLink to='/signin'>How it Works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Term of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to='/signin'>About us</FooterLink>
                            <FooterLink to='/signin'>How it Works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Term of Services</FooterLink>
                        </FooterLinkItems>  
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to='/signin'>About us</FooterLink>
                            <FooterLink to='/signin'>How it Works</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Term of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to='/signin'>About us</FooterLink>
                            <FooterLink to='/signin'>How it Works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Term of Services</FooterLink>
                        </FooterLinkItems>  
                    </FooterLinksWrapper>    
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>Jabs © {new Date().getFullYear()} All Rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label="facebook"> <FaFacebook /> </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Instagram"> <FaInstagram /> </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Youtube"> <FaYoutube /> </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Twitter"> <FaTwitter /> </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Linkedin"> <FaLinkedin /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
