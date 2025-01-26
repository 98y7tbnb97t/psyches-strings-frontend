import styled from 'styled-components';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaPatreon,
} from 'react-icons/fa';
import { Colors } from '@/shared/const/colors';
import { Container } from '@/shared/ui/Container/Container';
import { Text } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Section } from '@/shared/ui/Section';
import { StringCanvas } from '@/shared/ui/Strings/StringCanvas/StringCanvas';
import { getRouteMain } from '@/shared/const/router';
import CustomLink from '@/shared/ui/AppLink/CustomLink';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ height: '120px', width: '100vw' }} className={className}>
      <Section height="120px" background={Colors.Purple}>
        <VStack gap="32">
          <StringCanvas width={'100%'} animated4 />
          <Container flex justify="space-between" align="center">
            <CustomLink to={getRouteMain()}>
              <Text h3 align="center" color={Colors.White}>
                Psyches Strings
              </Text>{' '}
            </CustomLink>
            <HStack gap="32" align="center">
              <FaTelegram color={Colors.White} size={24} />
              <FaYoutube color={Colors.White} size={24} />
            </HStack>
          </Container>
        </VStack>
      </Section>
    </footer>
  );
};
