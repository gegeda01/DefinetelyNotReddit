import React from 'react';
import styles from './Toolbox.module.scss';

const Toolbox: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles['icon-wrapper']}>
          <div className={`${styles.icon}`}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 0H8.5L7 1.5V6H2.5L1 7.5V22.5699L2.5 24H14.5699L16 22.5699V18H20.7L22 16.5699V4.5L17.5 0ZM17.5 2.12L19.88 4.5H17.5V2.12ZM14.5 22.5H2.5V7.5H7V16.5699L8.5 18H14.5V22.5ZM20.5 16.5H8.5V1.5H16V6H20.5V16.5Z"
                fill="#C5C5C5"
              />
            </svg>
          </div>
        </div>
        <div className={styles.icon}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.25 1.02546e-06C13.6605 -0.000791296 12.1046 0.457574 10.7694 1.32007C9.43422 2.18256 8.37657 3.4124 7.72375 4.8617C7.07094 6.31099 6.85077 7.91801 7.0896 9.4895C7.32843 11.061 8.01604 12.5301 9.06995 13.72L1 22.88L2.12 23.88L10.17 14.76C11.2055 15.5693 12.4192 16.1196 13.7103 16.365C15.0014 16.6104 16.3325 16.5437 17.5927 16.1707C18.8528 15.7976 20.0055 15.1288 20.955 14.2201C21.9044 13.3114 22.623 12.1891 23.0509 10.9465C23.4789 9.70396 23.6038 8.37703 23.4153 7.07642C23.2267 5.77581 22.7302 4.53915 21.967 3.46924C21.2039 2.39933 20.1962 1.52711 19.0278 0.925416C17.8595 0.323719 16.5642 0.00991516 15.25 0.0100108V1.02546e-06ZM15.25 15C13.915 15 12.6099 14.6041 11.4999 13.8624C10.3898 13.1207 9.52469 12.0665 9.01379 10.8331C8.5029 9.59973 8.36919 8.24248 8.62964 6.93311C8.89009 5.62373 9.53305 4.42106 10.4771 3.47705C11.4211 2.53305 12.6237 1.89009 13.9331 1.62964C15.2425 1.36919 16.5997 1.5029 17.8331 2.01379C19.0665 2.52469 20.1207 3.38985 20.8624 4.49988C21.6041 5.60991 22 6.91498 22 8.25C22 10.0402 21.2888 11.7571 20.0229 13.023C18.7571 14.2888 17.0402 15 15.25 15Z"
              fill="#C5C5C5"
            />
          </svg>
        </div>
        <div className={styles.icon}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0067 8.22168C21.0102 7.52792 20.8205 6.84689 20.4589 6.25485C20.0971 5.66281 19.5778 5.18315 18.959 4.86957C18.3401 4.556 17.6461 4.42091 16.9548 4.47941C16.2635 4.53793 15.6022 4.78773 15.0448 5.20085C14.4875 5.61397 14.0561 6.17409 13.7991 6.8185C13.5421 7.4629 13.4695 8.16613 13.5895 8.84944C13.7096 9.53274 14.0174 10.1692 14.4787 10.6874C14.94 11.2056 15.5365 11.5852 16.2012 11.7836C15.9558 12.2824 15.576 12.703 15.1047 12.9979C14.6334 13.2929 14.0892 13.4505 13.5331 13.4532H10.5437C9.43702 13.4571 8.37138 13.8727 7.55427 14.6191V7.39809C8.46159 7.21288 9.26783 6.69737 9.81668 5.95151C10.3655 5.20565 10.6178 4.28256 10.5248 3.36121C10.4317 2.43987 9.99985 1.5859 9.31292 0.964873C8.62599 0.343845 7.73295 0 6.80691 0C5.88087 0 4.98783 0.343845 4.3009 0.964873C3.61397 1.5859 3.18211 2.43987 3.08904 3.36121C2.99596 4.28256 3.24831 5.20565 3.79715 5.95151C4.34599 6.69737 5.15223 7.21288 6.05955 7.39809V16.5159C5.15393 16.6891 4.34299 17.1877 3.77969 17.9176C3.21639 18.6476 2.93968 19.5585 3.00173 20.4785C3.06379 21.3984 3.46033 22.2639 4.11656 22.9115C4.77279 23.5592 5.64335 23.9444 6.56403 23.9944C7.48472 24.0445 8.39187 23.7558 9.1144 23.183C9.83693 22.6102 10.3249 21.7928 10.4862 20.885C10.6475 19.9771 10.4712 19.0417 9.99023 18.255C9.50932 17.4683 8.75717 16.8848 7.87564 16.6145C8.12152 16.1162 8.50142 15.6963 8.97272 15.4019C9.44401 15.1074 9.98803 14.9503 10.5437 14.9479H13.5331C14.4658 14.9436 15.3739 14.6486 16.1311 14.1039C16.8882 13.5592 17.4566 12.792 17.7572 11.9091C18.6531 11.7914 19.476 11.3528 20.0735 10.6748C20.671 9.9968 21.0025 9.12533 21.0067 8.22168ZM4.56483 3.73752C4.56483 3.29408 4.69633 2.8606 4.94269 2.4919C5.18906 2.12319 5.53922 1.83581 5.9489 1.66611C6.3586 1.49642 6.8094 1.45202 7.24432 1.53854C7.67924 1.62504 8.07874 1.83857 8.3923 2.15214C8.70586 2.4657 8.9194 2.8652 9.00591 3.30012C9.09241 3.73504 9.04802 4.18585 8.87832 4.59553C8.70862 5.00521 8.42125 5.35539 8.05254 5.60175C7.68383 5.84811 7.25035 5.9796 6.80691 5.9796C6.21227 5.9796 5.642 5.74339 5.22152 5.32291C4.80105 4.90245 4.56483 4.33216 4.56483 3.73752ZM9.04899 20.1794C9.04899 20.6229 8.91749 21.0563 8.67113 21.425C8.42476 21.7937 8.0746 22.0811 7.66492 22.2508C7.25523 22.4205 6.80442 22.4649 6.36951 22.3784C5.93458 22.292 5.53509 22.0784 5.22152 21.7648C4.90796 21.4512 4.69443 21.0517 4.60791 20.6169C4.52141 20.1819 4.5658 19.7311 4.7355 19.3214C4.9052 18.9117 5.19258 18.5615 5.56128 18.3152C5.92999 18.0689 6.36347 17.9373 6.80691 17.9373C7.40155 17.9373 7.97183 18.1736 8.3923 18.594C8.81277 19.0145 9.04899 19.5848 9.04899 20.1794ZM17.2699 10.4638C16.8265 10.4638 16.393 10.3322 16.0243 10.0859C15.6556 9.83954 15.3683 9.48937 15.1986 9.07969C15.0289 8.67 14.9844 8.2192 15.0709 7.78427C15.1574 7.34935 15.3709 6.94985 15.6845 6.63629C15.9981 6.32273 16.3976 6.10919 16.8325 6.02268C17.2674 5.93617 17.7183 5.98058 18.1279 6.15027C18.5377 6.31997 18.8878 6.60734 19.1341 6.97605C19.3805 7.34476 19.512 7.77823 19.512 8.22168C19.512 8.81632 19.2757 9.3866 18.8553 9.80706C18.4348 10.2275 17.8645 10.4638 17.2699 10.4638Z"
              fill="#C5C5C5"
            />
          </svg>
        </div>

        <div className={styles.icon}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.94 13.5L9.62 14.82C9.41924 14.0117 8.95376 13.2939 8.29772 12.7809C7.64168 12.2679 6.83282 11.9892 6 11.9892C5.16718 11.9892 4.35832 12.2679 3.70228 12.7809C3.04624 13.2939 2.58076 14.0117 2.38 14.82L1.06 13.5L0 14.56L1.72 16.28L1.5 16.5V18H0V19.5H1.5V19.58C1.5765 20.0687 1.71425 20.5458 1.91 21L0 22.94L1.06 24L2.71 22.35C3.10257 22.8509 3.60118 23.2586 4.17002 23.5438C4.73885 23.8291 5.36381 23.9849 6 24C6.63619 23.9849 7.26115 23.8291 7.82998 23.5438C8.39882 23.2586 8.89743 22.8509 9.29 22.35L10.94 24L12 22.94L10.09 21C10.2882 20.5362 10.426 20.0489 10.5 19.55V19.45H12V18H10.5V16.5L10.28 16.28L12 14.56L10.94 13.5ZM6 13.5C6.59674 13.5 7.16903 13.7371 7.59099 14.159C8.01295 14.581 8.25 15.1533 8.25 15.75H3.75C3.75 15.1533 3.98705 14.581 4.40901 14.159C4.83097 13.7371 5.40326 13.5 6 13.5V13.5ZM9 19.5C8.92674 20.2709 8.58713 20.9921 8.0396 21.5396C7.49207 22.0871 6.77085 22.4267 6 22.5C5.22915 22.4267 4.50793 22.0871 3.9604 21.5396C3.41287 20.9921 3.07326 20.2709 3 19.5V17.25H9V19.5ZM23.76 9.6V10.86L13.5 17.37V15.6L22 10.23L9 2V11.46C8.54306 11.139 8.03624 10.8958 7.5 10.74V0.63L8.64 0L23.76 9.6Z"
              fill="#C5C5C5"
            />
          </svg>
        </div>

        <div className={styles.icon}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5 1.5L15 0H22.5L24 1.5V9L22.5 10.5H15L13.5 9V1.5ZM15 1.5V9H22.5V1.5H15ZM0 15V6L1.5 4.5H9L10.5 6V13.5H18L19.5 15V22.5L18 24H10.5H9H1.5L0 22.5V15ZM9 13.5V6H1.5V13.5H9ZM9 15H1.5V22.5H9V15ZM10.5 22.5H18V15H10.5V22.5Z"
              fill="#C5C5C5"
            />
          </svg>
        </div>

        <div className={styles.icon}>
          <svg width="30"
           height="30"
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
          <path d="M16 7.99201C16 3.58042 12.416 0 8 0C3.584 0 0 3.58042 0 7.99201C0 10.4216 1.104 12.6114 2.832 14.0819C2.848 14.0979 2.864 14.0979 2.864 14.1139C3.008 14.2258 3.152 14.3377 3.312 14.4496C3.392 14.4975 3.456 14.5614 3.536 14.6254C4.816 15.4885 6.352 16 8.016 16C9.68 16 11.216 15.4885 12.496 14.6254C12.576 14.5774 12.64 14.5135 12.72 14.4655C12.864 14.3536 13.024 14.2418 13.168 14.1299C13.184 14.1139 13.2 14.1139 13.2 14.0979C14.896 12.6114 16 10.4216 16 7.99201ZM8 14.993C6.496 14.993 5.12 14.5135 3.984 13.7143C4 13.5864 4.032 13.4585 4.064 13.3307C4.16 12.979 4.304 12.6434 4.48 12.3397C4.656 12.036 4.864 11.7642 5.12 11.5245C5.36 11.2847 5.648 11.0609 5.936 10.8851C6.24 10.7093 6.56 10.5814 6.912 10.4855C7.264 10.3896 7.632 10.3417 8 10.3417C8.592 10.3417 9.136 10.4535 9.632 10.6613C10.128 10.8691 10.56 11.1568 10.928 11.5085C11.296 11.8761 11.584 12.3077 11.792 12.8032C11.904 13.0909 11.984 13.3946 12.032 13.7143C10.88 14.5135 9.504 14.993 8 14.993ZM5.552 7.59241C5.408 7.27273 5.344 6.92108 5.344 6.56943C5.344 6.21778 5.408 5.86613 5.552 5.54645C5.696 5.22677 5.888 4.93906 6.128 4.6993C6.368 4.45954 6.656 4.26773 6.976 4.12388C7.296 3.98002 7.648 3.91608 8 3.91608C8.368 3.91608 8.704 3.98002 9.024 4.12388C9.344 4.26773 9.632 4.45954 9.872 4.6993C10.112 4.93906 10.304 5.22677 10.448 5.54645C10.592 5.86613 10.656 6.21778 10.656 6.56943C10.656 6.93706 10.592 7.27273 10.448 7.59241C10.304 7.91209 10.112 8.1998 9.872 8.43956C9.632 8.67932 9.344 8.87113 9.024 9.01499C8.384 9.28671 7.6 9.28671 6.96 9.01499C6.64 8.87113 6.352 8.67932 6.112 8.43956C5.872 8.1998 5.68 7.91209 5.552 7.59241ZM12.976 12.8991C12.976 12.8671 12.96 12.8511 12.96 12.8192C12.8 12.3237 12.576 11.8442 12.272 11.4126C11.968 10.981 11.616 10.5974 11.184 10.2777C10.864 10.038 10.512 9.83017 10.144 9.67033C10.32 9.55844 10.48 9.41459 10.608 9.28671C10.848 9.04695 11.056 8.79121 11.232 8.5035C11.408 8.21578 11.536 7.91209 11.632 7.57642C11.728 7.24076 11.76 6.90509 11.76 6.56943C11.76 6.04196 11.664 5.54645 11.472 5.0989C11.28 4.65135 11.008 4.25175 10.656 3.9001C10.32 3.56444 9.904 3.29271 9.456 3.1009C9.008 2.90909 8.512 2.81319 7.984 2.81319C7.456 2.81319 6.96 2.90909 6.512 3.1009C6.064 3.29271 5.648 3.56444 5.312 3.91608C4.976 4.25175 4.704 4.66733 4.512 5.11489C4.32 5.56244 4.224 6.05794 4.224 6.58541C4.224 6.93706 4.272 7.27273 4.368 7.59241C4.464 7.92807 4.592 8.23177 4.768 8.51948C4.928 8.80719 5.152 9.06294 5.392 9.3027C5.536 9.44655 5.696 9.57443 5.872 9.68631C5.488 9.86214 5.136 10.0699 4.832 10.3097C4.416 10.6294 4.048 11.013 3.744 11.4286C3.44 11.8601 3.216 12.3237 3.056 12.8352C3.04 12.8671 3.04 12.8991 3.04 12.9151C1.776 11.6364 0.992 9.91009 0.992 7.99201C0.992 4.13986 4.144 0.991009 8 0.991009C11.856 0.991009 15.008 4.13986 15.008 7.99201C15.008 9.91009 14.224 11.6364 12.976 12.8991Z" fill="#C5C5C5"/>
          </svg>
        </div>

        <div className={styles.icon}>
          <svg width="30" 
            height="30"
            viewBox="0 0 16 16"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"
              clipRule="evenodd"
              d="M9.09976 4.4L8.59976 2H7.39976L6.89976 4.4L6.19976 4.7L4.19976 3.4L3.29976 4.2L4.59976 6.2L4.39976 6.9L1.99976 7.4V8.6L4.39976 9.1L4.69976 9.9L3.39976 11.9L4.19976 12.7L6.19976 11.4L6.99976 11.7L7.39976 14H8.59976L9.09976 11.6L9.89976 11.3L11.8998 12.6L12.6998 11.8L11.3998 9.8L11.6998 9L13.9998 8.6V7.4L11.5998 6.9L11.2998 6.1L12.5998 4.1L11.7998 3.3L9.79976 4.6L9.09976 4.4ZM9.39976 1L9.89976 3.4L11.9998 2.1L13.9998 4.1L12.5998 6.2L14.9998 6.6V9.4L12.5998 9.9L13.9998 12L11.9998 14L9.89976 12.6L9.39976 15H6.59976L6.09976 12.6L3.99976 13.9L1.99976 11.9L3.39976 9.8L0.999756 9.4V6.6L3.39976 6.1L2.09976 4L4.09976 2L6.19976 3.4L6.59976 1H9.39976ZM9.99976 8C9.99976 9.1 9.09976 10 7.99976 10C6.89976 10 5.99976 9.1 5.99976 8C5.99976 6.9 6.89976 6 7.99976 6C9.09976 6 9.99976 6.9 9.99976 8ZM7.99976 9C8.59976 9 8.99976 8.6 8.99976 8C8.99976 7.4 8.59976 7 7.99976 7C7.39976 7 6.99976 7.4 6.99976 8C6.99976 8.6 7.39976 9 7.99976 9Z" 
              fill="#C5C5C5"/>
        </svg>
        </div>
      </div>
    </>
  );
};

export default Toolbox;
