import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, ScrollSmoother, TextPlugin)

export { gsap, useGSAP, ScrollTrigger, SplitText, ScrollSmoother, TextPlugin }