import React from 'react';

const Dashboard_Icon = ({ option, fillColor, className }) => {
    if (option === 'normal') {
        return (
            <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={fillColor} fill-rule="evenodd" clip-rule="evenodd" d="M5.36364 4C4.63099 4 4 4.64133 4 5.33333V7.57692C4 8.31446 4.59229 8.92851 5.40276 9H7.63636C8.36901 9 9 8.35867 9 7.66667V5.33333C9 4.59001 8.40932 4 7.72727 4H5.36364ZM2 5.33333C2 3.51251 3.55083 2 5.36364 2H7.72727C9.59068 2 11 3.56383 11 5.33333V7.66667C11 9.48749 9.44917 11 7.63636 11H5.36364C5.34017 11 5.31671 10.9992 5.2933 10.9975C3.57427 10.8763 2 9.52226 2 7.57692V5.33333ZM16.3636 4C15.631 4 15 4.64133 15 5.33333V7.66667C15 8.35867 15.631 9 16.3636 9H18.6364C19.369 9 20 8.35867 20 7.66667V5.33333C20 4.59001 19.4093 4 18.7273 4H16.3636ZM13 5.33333C13 3.51251 14.5508 2 16.3636 2H18.7273C20.5907 2 22 3.56383 22 5.33333V7.66667C22 9.48749 20.4492 11 18.6364 11H16.3636C14.5508 11 13 9.48749 13 7.66667V5.33333ZM5.36364 15C4.63099 15 4 15.6413 4 16.3333V18.6667C4 19.2931 4.56786 19.9266 5.40268 20H7.63636C8.36901 20 9 19.3587 9 18.6667V16.3333C9 15.59 8.40932 15 7.72727 15H5.36364ZM2 16.3333C2 14.5125 3.55083 13 5.36364 13H7.72727C9.59068 13 11 14.5638 11 16.3333V18.6667C11 20.4875 9.44917 22 7.63636 22H5.36364C5.34017 22 5.31671 21.9992 5.2933 21.9975C3.59974 21.8781 2 20.5453 2 18.6667V16.3333ZM16.3636 15C15.631 15 15 15.6413 15 16.3333V18.6667C15 19.3587 15.631 20 16.3636 20H18.6364C19.369 20 20 19.3587 20 18.6667V16.3333C20 15.59 19.4093 15 18.7273 15H16.3636ZM13 16.3333C13 14.5125 14.5508 13 16.3636 13H18.7273C20.5907 13 22 14.5638 22 16.3333V18.6667C22 20.4875 20.4492 22 18.6364 22H16.3636C14.5508 22 13 20.4875 13 18.6667V16.3333Z"/>
            </svg>
        )
    } else if (option === 'solid') {
        return (
            <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={fillColor} fill-rule="evenodd" clip-rule="evenodd" d="M2 5.33333C2 3.51251 3.55083 2 5.36364 2H7.72727C9.59068 2 11 3.56383 11 5.33333V7.66667C11 9.48749 9.44917 11 7.63636 11H5.36364C5.34017 11 5.31671 10.9992 5.2933 10.9975C3.57427 10.8763 2 9.52226 2 7.57692V5.33333ZM13 5.33333C13 3.51251 14.5508 2 16.3636 2H18.7273C20.5907 2 22 3.56383 22 5.33333V7.66667C22 9.48749 20.4492 11 18.6364 11H16.3636C14.5508 11 13 9.48749 13 7.66667V5.33333ZM2 16.3333C2 14.5125 3.55083 13 5.36364 13H7.72727C9.59068 13 11 14.5638 11 16.3333V18.6667C11 20.4875 9.44917 22 7.63636 22H5.36364C5.34017 22 5.31671 21.9992 5.2933 21.9975C3.59974 21.8781 2 20.5453 2 18.6667V16.3333ZM13 16.3333C13 14.5125 14.5508 13 16.3636 13H18.7273C20.5907 13 22 14.5638 22 16.3333V18.6667C22 20.4875 20.4492 22 18.6364 22H16.3636C14.5508 22 13 20.4875 13 18.6667V16.3333Z"/>
            </svg>
        )
    }
}

export default Dashboard_Icon;