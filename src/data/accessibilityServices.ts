import type { Service } from '../types';

export const accessibilityServices: Service[] = [
  {
    id: 'exam-accommodations',
    categoryId: 'accessibility',
    name: 'Exam Accommodations',
    responseType: 'location',
    keywords: [
      'exam', 'test', 'quiz', 'midterm', 'final', 'accommodation',
      'extra time', 'extended time', 'quiet room', 'separate room',
      'write exam', 'accommodation letter', 'exam accommodation',
    ],
    locationId: 'accessibility-services',
    bookingUrl: 'https://www.studentlife.utoronto.ca/as/exams',
  },
  {
    id: 'register-accessibility',
    categoryId: 'accessibility',
    name: 'Register with Accessibility Services',
    responseType: 'info',
    keywords: [
      'register', 'sign up', 'enroll', 'join', 'get started',
      'first time', 'new student', 'qualify',
      'documentation', 'disability documentation',
    ],
    infoAnswer: `**How to register with Accessibility Services:**

1. Gather documentation from a qualified professional (doctor, psychologist, etc.) describing your disability and its functional impacts.
2. Go to [studentlife.utoronto.ca/as](https://www.studentlife.utoronto.ca/as) and click **"New Students – Register Here"**.
3. Complete the online intake form and upload your documentation.
4. An advisor will review your file and contact you to schedule an intake appointment.
5. After your appointment, you'll receive your **Letter of Accommodation** to share with instructors.

Registration is free and confidential.`,
    relatedLinks: [
      { label: 'Register Online', url: 'https://www.studentlife.utoronto.ca/as/new-registration' },
    ],
  },
  {
    id: 'letter-of-accommodation',
    categoryId: 'accessibility',
    name: 'Letter of Accommodation',
    responseType: 'info',
    keywords: [
      'letter', 'accommodation letter', 'loa',
      'share with professor', 'tell my instructor', 'notify professor',
      'send to instructor', 'give to professor',
    ],
    infoAnswer: `**How to get and use your Letter of Accommodation (LOA):**

1. Log in to the [Accessibility Services Student Portal](https://clockwork.studentlife.utoronto.ca/custom/misc/home.aspx).
2. Under **"My Accommodations"**, generate your LOA for the current semester.
3. Email or give the letter to each of your instructors at the start of term.
4. Meet with instructors to discuss how accommodations will be implemented in their course.

Your LOA is issued per semester — regenerate it each term.`,
    relatedLinks: [
      { label: 'Accessibility Portal', url: 'https://clockwork.studentlife.utoronto.ca/custom/misc/home.aspx' },
    ],
  },
  {
    id: 'note-taking',
    categoryId: 'accessibility',
    name: 'Note-Taking Support',
    responseType: 'info',
    keywords: [
      'notes', 'note taking', 'notetaker', 'note taker', 'lecture notes',
      'recording lectures', 'record class', 'missed notes', 'peer notes',
    ],
    infoAnswer: `**How to get note-taking support:**

1. Your Letter of Accommodation (LOA) must include note-taking as an approved accommodation.
2. Log in to the [Accessibility Services Portal](https://clockwork.studentlife.utoronto.ca/custom/misc/home.aspx) and request a note-taker for each course.
3. A peer volunteer note-taker will be recruited anonymously from your class.
4. Notes are uploaded to the portal — download them after each lecture.

If no volunteer is found within two weeks, contact your Accessibility Advisor.`,
    relatedLinks: [
      { label: 'Accessibility Portal', url: 'https://clockwork.studentlife.utoronto.ca/custom/misc/home.aspx' },
    ],
  },
  {
    id: 'assistive-technology',
    categoryId: 'accessibility',
    name: 'Assistive Technology',
    responseType: 'location',
    keywords: [
      'assistive technology', 'assistive tech', 'screen reader', 'jaws', 'nvda',
      'dragon', 'speech to text', 'text to speech', 'magnification',
      'adaptive software', 'kurzweil', 'borrow equipment',
    ],
    locationId: 'accessibility-services',
  },
  {
    id: 'test-extension',
    categoryId: 'accessibility',
    name: 'Assignment / Test Extension',
    responseType: 'info',
    keywords: [
      'extension', 'deadline', 'late', 'overdue', 'more time',
      'assignment extension', 'due date', 'submit late', 'defer',
    ],
    infoAnswer: `**How to request an assignment or test extension:**

1. Your LOA must include "flexibility with deadlines" or similar wording.
2. Contact your instructor **before** the deadline — do not wait until after.
3. Reference your LOA and propose a specific new date.
4. If your instructor is unresponsive or denies a reasonable request, contact your Accessibility Advisor.

For term tests, the process may differ — ask your advisor about your faculty's policy.`,
  },
  {
    id: 'accessible-workstation',
    categoryId: 'accessibility',
    name: 'Accessible Computer Workstations',
    responseType: 'location',
    keywords: [
      'computer', 'workstation', 'accessible computer', 'adaptive workstation',
      'accessible lab', 'computer lab', 'robarts',
    ],
    locationId: 'robarts-library',
  },
  {
    id: 'interpreter-services',
    categoryId: 'accessibility',
    name: 'Sign Language Interpreter',
    responseType: 'info',
    keywords: [
      'interpreter', 'sign language', 'asl', 'deaf', 'hard of hearing',
      'captioning', 'cart', 'real time captioning',
    ],
    infoAnswer: `**How to request sign language interpretation or captioning:**

1. Log in to the [Accessibility Services Portal](https://clockwork.studentlife.utoronto.ca/custom/misc/home.aspx).
2. Under **"My Accommodations"**, submit an interpreter or CART captioning request for each class or event.
3. Requests should be made **at least 5 business days** in advance; longer for exams or special events.
4. For last-minute needs, call Accessibility Services directly at 416-978-8060.`,
    relatedLinks: [
      { label: 'Accessibility Services', url: 'https://www.studentlife.utoronto.ca/as' },
    ],
  },
  {
    id: 'fallback-accessibility',
    categoryId: 'accessibility',
    name: 'Accessibility Services — General',
    responseType: 'info',
    keywords: [],
    infoAnswer: `**Not sure where to start? Contact Accessibility Services:**

- **Phone:** 416-978-8060
- **Email:** accessibility.services@utoronto.ca
- **Office:** 455 Spadina Ave, Suite 400
- **Hours:** Monday–Friday, 9am–5pm

You can walk in during drop-in hours or book an appointment with an advisor online.`,
    relatedLinks: [
      { label: 'Accessibility Services Website', url: 'https://www.studentlife.utoronto.ca/as' },
      { label: 'Book an Appointment', url: 'https://www.studentlife.utoronto.ca/as/appointments' },
    ],
  },
];
