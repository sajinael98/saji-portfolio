"use client"
import { Box } from "@mantine/core";
import About from "./components/About";
import { motion } from 'framer-motion';
import Hero from "./components/Hero";
import Section from "./components/Section";
import { Contact } from "./modules/contact/presentation";
import { ProjectCardList } from "./modules/projects/presentation";
import ServicesList from "./modules/services/presentation/ServicesList/ServicesList";
import { TeckStackList } from "./modules/tech-stack/presentation";

const gradientTop = 'linear-gradient(to top, #242424, #262626, #292929, #2b2b2b, #2e2e2e)'
const gradientBottom = 'linear-gradient(to bottom, #242424, #262626, #292929, #2b2b2b, #2e2e2e)'

export default function HomePage() {
  return <motion.div
    initial={{
      y: "200vh",
      position: 'relative',
      zIndex: -9
    }}
    animate={{
      y: "0%",
      position: 'relative',
      zIndex: 1
    }}
    transition={{
      delay: 1.5,
      duration: 1
    }}
  >
    <Box
      h={{ base: '110vh', lg: '80vh' }}
      pt={'lg'}
      bg={gradientBottom}
      px={{
        base: 'calc(var(--mantine-spacing-sm) * 2)',
        lg: 'calc(var(--mantine-spacing-lg) * 7)'
      }}
    >
      <Hero />
    </Box>

    <Section
      title="About Me"
      bg={gradientTop}
    >
      <About />
    </Section>

    <Section title="My Services">
      <ServicesList />
    </Section>

    <Section title="Tech Stack">
      <TeckStackList />
    </Section>

    <Section id="projects" title="My Projects">
      <ProjectCardList />
    </Section>

    <Section mb={'md'}>
      <Contact />
    </Section>
  </motion.div>;
}
