import Link from 'next/link';
import styles from './Logo.module.css';

function Logo() {
  return (
    <Link href="/">
    <h1 className={styles.logo}>
        <svg width="103" height="115" viewBox="0 0 103 115" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoSymbol}>
          <g>
            <path d="M99.4384 63.998H87.9354C87.4116 63.998 86.987 64.4201 86.987 64.9408V102.364C86.987 102.885 87.4116 103.307 87.9354 103.307H99.4384C99.9622 103.307 100.387 102.885 100.387 102.364V64.9408C100.387 64.4201 99.9622 63.998 99.4384 63.998Z" fill="#855288"/>
            <path d="M13.748 63.998H3.68325C2.76229 63.998 2.01571 64.7401 2.01571 65.6556V101.649C2.01571 102.565 2.76229 103.307 3.68325 103.307H13.748C14.6689 103.307 15.4155 102.565 15.4155 101.649V65.6556C15.4155 64.7401 14.6689 63.998 13.748 63.998Z" fill="#855288"/>
            <path d="M81.3672 24.6891H22.669C19.5653 24.6891 17.0492 27.1901 17.0492 30.2753V105.516C17.0492 108.601 19.5653 111.102 22.669 111.102H81.3672C84.471 111.102 86.9871 108.601 86.9871 105.516V30.2753C86.9871 27.1901 84.471 24.6891 81.3672 24.6891Z" fill="#61A2BA"/>
            <path d="M86.9899 106.054C86.9902 106.715 86.8594 107.37 86.6049 107.982C86.3503 108.593 85.977 109.149 85.5064 109.616C85.0357 110.084 84.4769 110.455 83.8619 110.708C83.2469 110.961 82.5877 111.091 81.9221 111.091H17.0605C17.0605 111.091 62.8175 107.843 73.9269 97.1241C85.0364 86.4048 85.0392 30.2021 85.0392 30.2021L86.9899 106.054Z" fill="#5482A2"/>
            <path d="M100.367 63.2775C99.533 62.4469 98.5422 61.7882 97.4515 61.3391C96.3608 60.8899 95.1917 60.6593 94.0111 60.6603H93.4449C92.2355 60.6592 91.0384 60.9014 89.9257 61.3723L89.334 33.9394C89.3176 30.4675 87.9185 27.1434 85.4429 24.6942C82.9673 22.245 79.6167 20.8701 76.1239 20.8701H75.0509C74.4446 15.1463 71.7279 9.84827 67.4247 5.9975C63.1215 2.14673 57.5364 0.0159302 51.7463 0.0159302C45.9562 0.0159302 40.3711 2.14673 36.0678 5.9975C31.7646 9.84827 29.0479 15.1463 28.4417 20.8701H26.4032C22.9105 20.8701 19.5598 22.245 17.0842 24.6942C14.6086 27.1434 13.2096 30.4675 13.1931 33.9394L12.6071 61.195C11.6342 60.8433 10.6072 60.6624 9.57205 60.6603H9.00582C7.82491 60.6599 6.65549 60.8909 5.5644 61.3399C4.4733 61.789 3.48192 62.4473 2.64688 63.2773C1.81185 64.1074 1.14954 65.0928 0.697791 66.1774C0.246046 67.262 0.0137199 68.4244 0.0140919 69.5983V96.8511C0.0178374 99.2164 0.964978 101.484 2.64787 103.156C4.33076 104.828 6.61208 105.769 8.99167 105.772H9.5579C10.4534 105.776 11.3439 105.639 12.1965 105.367C12.9679 108.136 14.6317 110.578 16.933 112.317C19.2343 114.056 22.0459 114.996 24.9367 114.994H77.5961C80.5152 114.994 83.3519 114.033 85.6638 112.261C87.9756 110.489 89.6325 108.007 90.3759 105.201C91.3575 105.577 92.4012 105.768 93.4533 105.764H94.0195C96.4036 105.764 98.6899 104.822 100.376 103.147C102.061 101.471 103.008 99.1983 103.008 96.8286V69.5926C103.008 68.419 102.774 67.2571 102.321 66.1735C101.867 65.0898 101.204 64.1057 100.367 63.2775ZM39.3189 10.9332C41.629 8.63371 44.5387 7.02051 47.7207 6.27499C50.9027 5.52948 54.2309 5.68122 57.3309 6.71315C60.4309 7.74508 63.1798 9.61628 65.2684 12.1163C67.357 14.6163 68.7025 17.6459 69.1536 20.8645H34.3305C34.8587 17.1017 36.6106 13.614 39.3189 10.9332ZM10.6366 99.7441C10.2966 99.8913 9.92871 99.9643 9.5579 99.958H8.99167C8.58023 99.9584 8.17276 99.8781 7.79253 99.7219C7.4123 99.5656 7.06677 99.3364 6.77571 99.0473C6.48464 98.7583 6.25374 98.415 6.09621 98.0372C5.93867 97.6594 5.85759 97.2544 5.85759 96.8455V69.5926C5.85721 69.1834 5.93802 68.7781 6.09539 68.4C6.25276 68.0219 6.4836 67.6783 6.7747 67.3889C7.0658 67.0995 7.41146 66.8701 7.79187 66.7137C8.17228 66.5572 8.57999 66.4769 8.99167 66.4773H9.5579C9.9697 66.476 10.3777 66.556 10.7582 66.7125C11.1387 66.869 11.4842 67.099 11.7747 67.3891C12.0537 67.6694 12.2783 67.9986 12.4372 68.36L11.7832 98.6297C11.6805 98.824 11.5561 99.0062 11.4123 99.1728C11.1965 99.4148 10.9323 99.6094 10.6366 99.7441ZM77.5848 109.177H24.9254C22.9766 109.177 21.1072 108.409 19.7274 107.041C18.3475 105.673 17.5696 103.817 17.5644 101.88L17.6097 99.7722C17.8928 98.8548 18.459 68.2334 18.3062 67.5889L19.0422 34.0294V34.0097C19.0422 32.0691 19.8178 30.208 21.1982 28.8358C22.5787 27.4636 24.451 26.6928 26.4032 26.6928H76.1324C78.0846 26.6928 79.9569 27.4636 81.3374 28.8358C82.7178 30.208 83.4934 32.0691 83.4934 34.0097V34.0407L84.957 101.891C84.9563 102.851 84.7653 103.801 84.3948 104.688C84.0244 105.574 83.4819 106.379 82.7982 107.057C82.1146 107.734 81.3032 108.271 80.4106 108.637C79.518 109.003 78.5616 109.19 77.5961 109.189L77.5848 109.177ZM97.1423 96.8455C97.1423 97.671 96.8124 98.4626 96.2252 99.0463C95.638 99.63 94.8415 99.958 94.0111 99.958H93.4449C93.074 99.9643 92.7062 99.8913 92.3662 99.7441C91.9063 99.5305 91.5251 99.1792 91.2762 98.7394C90.9525 98.1608 90.7884 97.5074 90.8005 96.8455V96.8145L90.3108 69.5842C90.3152 68.7611 90.6475 67.9734 91.2349 67.3932C91.8222 66.8131 92.6168 66.4878 93.4449 66.4885H94.0111C94.4225 66.4885 94.8299 66.5691 95.21 66.7257C95.5901 66.8823 95.9354 67.1119 96.2262 67.4012C96.517 67.6905 96.7476 68.0339 96.9048 68.4119C97.062 68.7898 97.1427 69.1949 97.1423 69.6039V96.8455Z" fill="#161617"/>
            <path d="M75.1755 56.287H25.8711C25.1101 56.3106 24.3882 56.6276 23.8582 57.171C23.3283 57.7144 23.0319 58.4415 23.0319 59.1984C23.0319 59.9552 23.3283 60.6823 23.8582 61.2257C24.3882 61.7691 25.1101 62.0861 25.8711 62.1097H64.924V68.6612C64.9118 69.0511 64.9785 69.4395 65.1202 69.8033C65.2619 70.1671 65.4757 70.4989 65.7488 70.779C66.022 71.0591 66.349 71.2818 66.7104 71.4339C67.0718 71.586 67.4603 71.6644 67.8528 71.6644C68.2453 71.6644 68.6337 71.586 68.9951 71.4339C69.3565 71.2818 69.6836 71.0591 69.9567 70.779C70.2299 70.4989 70.4437 70.1671 70.5854 69.8033C70.7271 69.4395 70.7938 69.0511 70.7816 68.6612V62.1097H75.1755C75.5678 62.1218 75.9586 62.0555 76.3246 61.9146C76.6906 61.7737 77.0244 61.5613 77.3062 61.2897C77.588 61.0182 77.812 60.6931 77.965 60.3339C78.118 59.9746 78.1968 59.5885 78.1968 59.1984C78.1968 58.8082 78.118 58.4221 77.965 58.0628C77.812 57.7036 77.588 57.3785 77.3062 57.107C77.0244 56.8355 76.6906 56.623 76.3246 56.4821C75.9586 56.3413 75.5678 56.2749 75.1755 56.287Z" fill="#161617"/>
          </g>
          <defs>
          </defs>
        </svg>
        <svg id="Layer_1" data-name="Layer 1" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 62.01" className={styles.logoLetter}>
          <path className="brandLetter" d="M1142.12-675.91a13.37,13.37,0,0,1-6.61-1.61,10.62,10.62,0,0,1-4.34-4.37v1.44q0,4.41-4.2,4.41t-4.26-4.41v-40.88q0-4.33,4.26-4.34t4.34,4.34v16a11.15,11.15,0,0,1,4.37-4.09,13.3,13.3,0,0,1,6.44-1.55,14,14,0,0,1,7.77,2.13,14.22,14.22,0,0,1,5.16,6,21.43,21.43,0,0,1,1.86,9.32,21.75,21.75,0,0,1-1.86,9.33,14.09,14.09,0,0,1-5.19,6.09A14.1,14.1,0,0,1,1142.12-675.91Zm-2.41-6.54a7.7,7.7,0,0,0,6.19-2.78q2.34-2.79,2.34-8.23t-2.34-8.22a7.74,7.74,0,0,0-6.19-2.72,7.76,7.76,0,0,0-6.2,2.72q-2.34,2.71-2.34,8.22t2.34,8.23A7.72,7.72,0,0,0,1139.71-682.45Z" transform="translate(-1122.71 725.67)"/><path class="cls-1" d="M1168.41-676q-4.41,0-4.41-4.41v-26q0-4.34,4.2-4.33t4.2,4.33v2.14q2.47-5.92,10.6-6.61,3-.34,3.3,3.37c.23,2.43-1,3.79-3.58,4.06l-1.51.14q-8.46.82-8.47,8.67v14.25Q1172.74-676,1168.41-676Z" transform="translate(-1122.71 725.67)"/><path class="cls-1" d="M1203.17-675.91q-12.39,0-12.39-13.9v-16.66q0-4.34,4.26-4.33t4.34,4.33v16.8q0,3.57,1.45,5.3a5.71,5.71,0,0,0,4.61,1.72,7.34,7.34,0,0,0,5.64-2.38,8.87,8.87,0,0,0,2.2-6.29v-15.15c0-2.89,1.43-4.33,4.27-4.33s4.34,1.44,4.34,4.33v26q0,4.41-4.2,4.41t-4.2-4.41v-1.17A11.18,11.18,0,0,1,1203.17-675.91Z" transform="translate(-1122.71 725.67)"/><path class="cls-1" d="M1235.1-676c-2.84,0-4.27-1.47-4.27-4.41v-26q0-4.34,4.2-4.33t4.2,4.33V-705a11.47,11.47,0,0,1,4.65-4.41,14.07,14.07,0,0,1,6.57-1.51q11.91,0,11.91,13.83v16.66q0,4.41-4.27,4.41t-4.34-4.41v-16.24c0-2.62-.49-4.52-1.48-5.72a5.59,5.59,0,0,0-4.57-1.79,7.91,7.91,0,0,0-6,2.38,8.8,8.8,0,0,0-2.23,6.3v15.07Q1239.44-676,1235.1-676Z" transform="translate(-1122.71 725.67)"/><path class="cls-1" d="M1286.45-675.91a18.51,18.51,0,0,1-9.09-2.13,14.89,14.89,0,0,1-6-6.09,19.41,19.41,0,0,1-2.13-9.33,19.2,19.2,0,0,1,2.13-9.29,15,15,0,0,1,6-6.06,18.51,18.51,0,0,1,9.09-2.13,18.49,18.49,0,0,1,9.08,2.13,14.94,14.94,0,0,1,6,6.06,19.2,19.2,0,0,1,2.14,9.29,19.42,19.42,0,0,1-2.14,9.33,14.83,14.83,0,0,1-6,6.09A18.49,18.49,0,0,1,1286.45-675.91Zm0-6.54a7.7,7.7,0,0,0,6.19-2.78q2.34-2.79,2.34-8.23t-2.34-8.22a7.74,7.74,0,0,0-6.19-2.72,7.76,7.76,0,0,0-6.2,2.72q-2.34,2.71-2.34,8.22t2.34,8.23A7.72,7.72,0,0,0,1286.45-682.45Z" transform="translate(-1122.71 725.67)"/><path class="cls-1" d="M1323.68-675.91a14.1,14.1,0,0,1-7.74-2.13,14.12,14.12,0,0,1-5.2-6.09,21.75,21.75,0,0,1-1.86-9.33,21.43,21.43,0,0,1,1.86-9.32,14.24,14.24,0,0,1,5.2-6,14.1,14.1,0,0,1,7.74-2.13,13.27,13.27,0,0,1,6.47,1.58,10.66,10.66,0,0,1,4.34,4.2v-16.17q0-4.33,4.27-4.34t4.33,4.34v40.88q0,4.41-4.26,4.41t-4.27-4.41v-1.44a10.68,10.68,0,0,1-4.34,4.37A13.23,13.23,0,0,1,1323.68-675.91Zm2.41-6.54a7.72,7.72,0,0,0,6.2-2.78q2.34-2.79,2.34-8.23t-2.34-8.22a7.76,7.76,0,0,0-6.2-2.72,7.74,7.74,0,0,0-6.19,2.72q-2.34,2.71-2.34,8.22t2.34,8.23A7.7,7.7,0,0,0,1326.09-682.45Z" transform="translate(-1122.71 725.67)"/><path class="cls-1" d="M1364.22-675.91q-12.39,0-12.39-13.9v-16.66c0-2.89,1.43-4.33,4.27-4.33s4.34,1.44,4.34,4.33v16.8q0,3.57,1.44,5.3a5.73,5.73,0,0,0,4.61,1.72,7.34,7.34,0,0,0,5.65-2.38,8.87,8.87,0,0,0,2.2-6.29v-15.15q0-4.34,4.27-4.33t4.33,4.33v26q0,4.41-4.19,4.41t-4.2-4.41v-1.17A11.18,11.18,0,0,1,1364.22-675.91Z" transform="translate(-1122.71 725.67)"/><path class="cls-1" d="M1396.16-663.66q-4.28,0-4.27-4.33v-38.48q0-4.34,4.2-4.33c2.84,0,4.27,1.44,4.27,4.33V-705a10.73,10.73,0,0,1,4.33-4.3,13.29,13.29,0,0,1,6.61-1.62,14,14,0,0,1,7.74,2.13,14.24,14.24,0,0,1,5.2,6,21.43,21.43,0,0,1,1.86,9.32,21.75,21.75,0,0,1-1.86,9.33,14.24,14.24,0,0,1-5.16,6.09,14,14,0,0,1-7.78,2.13,13.18,13.18,0,0,1-6.43-1.55,10.84,10.84,0,0,1-4.37-4.16V-668Q1400.5-663.65,1396.16-663.66Zm12.73-18.79a7.72,7.72,0,0,0,6.2-2.78q2.34-2.79,2.34-8.23t-2.34-8.22a7.76,7.76,0,0,0-6.2-2.72,7.74,7.74,0,0,0-6.19,2.72q-2.34,2.71-2.34,8.22t2.34,8.23A7.7,7.7,0,0,0,1408.89-682.45Z" transform="translate(-1122.71 725.67)"/><path class="cls-1" d="M1436.08-676.25a5,5,0,0,1-3.75-1.45,5.08,5.08,0,0,1-1.41-3.71,4.91,4.91,0,0,1,1.41-3.62,5.07,5.07,0,0,1,3.75-1.41,4.92,4.92,0,0,1,3.75,1.41,5,5,0,0,1,1.34,3.62,5.21,5.21,0,0,1-1.34,3.71A4.83,4.83,0,0,1,1436.08-676.25Z" transform="translate(-1122.71 725.67)"/><path class="cls-1" d="M1463.34-675.91a18.74,18.74,0,0,1-9.23-2.17,14.84,14.84,0,0,1-6-6.16,19.48,19.48,0,0,1-2.14-9.36,18.87,18.87,0,0,1,2.14-9.25,14.61,14.61,0,0,1,6-6,19.29,19.29,0,0,1,9.23-2.1,21.92,21.92,0,0,1,4.92.62,16.72,16.72,0,0,1,5,2.06,3.13,3.13,0,0,1,1.61,2.14,3.55,3.55,0,0,1-.34,2.41,3.4,3.4,0,0,1-1.72,1.58,2.84,2.84,0,0,1-2.58-.34,12.36,12.36,0,0,0-6.13-1.79,8.71,8.71,0,0,0-6.91,2.78q-2.45,2.79-2.45,8t2.45,8a8.49,8.49,0,0,0,6.91,2.93,12.88,12.88,0,0,0,6.13-1.72,2.79,2.79,0,0,1,2.55-.35,3,3,0,0,1,1.58,1.62,3.88,3.88,0,0,1,.2,2.41,3.28,3.28,0,0,1-1.58,2.1,16.77,16.77,0,0,1-4.82,2A20,20,0,0,1,1463.34-675.91Z" transform="translate(-1122.71 725.67)"/><path class="cls-1" d="M1494.93-675.91a18.51,18.51,0,0,1-9.09-2.13,14.89,14.89,0,0,1-6-6.09,19.41,19.41,0,0,1-2.13-9.33,19.2,19.2,0,0,1,2.13-9.29,15,15,0,0,1,6-6.06,18.51,18.51,0,0,1,9.09-2.13,18.47,18.47,0,0,1,9.08,2.13,14.94,14.94,0,0,1,6,6.06,19.2,19.2,0,0,1,2.14,9.29,19.42,19.42,0,0,1-2.14,9.33,14.83,14.83,0,0,1-6,6.09A18.47,18.47,0,0,1,1494.93-675.91Zm0-6.54a7.7,7.7,0,0,0,6.19-2.78q2.34-2.79,2.34-8.23t-2.34-8.22a7.74,7.74,0,0,0-6.19-2.72,7.76,7.76,0,0,0-6.2,2.72q-2.34,2.71-2.34,8.22t2.34,8.23A7.72,7.72,0,0,0,1494.93-682.45Z" transform="translate(-1122.71 725.67)"/><path class="cls-1" d="M1523.63-676q-4.28,0-4.27-4.41v-26q0-4.34,4.2-4.33t4.2,4.33v1.38a11,11,0,0,1,4.2-4.3,12.18,12.18,0,0,1,6.19-1.55q7.57,0,9.91,6.61a11.72,11.72,0,0,1,4.55-4.86,13,13,0,0,1,6.74-1.75q11.36,0,11.36,13.83v16.66q0,4.41-4.34,4.41c-2.84,0-4.27-1.47-4.27-4.41v-16.31q0-3.86-1.27-5.65t-4.3-1.79a6.46,6.46,0,0,0-5.3,2.38,10.11,10.11,0,0,0-1.93,6.57v14.8q0,4.41-4.26,4.41c-2.9,0-4.34-1.47-4.34-4.41v-16.31q0-3.86-1.28-5.65a4.82,4.82,0,0,0-4.23-1.79,6.47,6.47,0,0,0-5.3,2.38,10.16,10.16,0,0,0-1.93,6.57v14.8Q1528-676,1523.63-676Z" transform="translate(-1122.71 725.67)"/>
        </svg>
    </h1>
    </Link>
  )
}

export default Logo;