import React from 'react';

const AllElements_Icon = ({ option, fillColor, className }) => {
    if (option  === 'normal') {
        return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={fillColor} stroke={fillColor} stroke-width="0.5" d="M20.25 10.1503V17.9668H21.75V10.1503H20.25ZM17 21.25H7V22.75H17V21.25ZM3.75 17.9668V10.1503H2.25V17.9668H3.75ZM4.94661 7.6055L9.94661 3.48832L8.99311 2.33037L3.99311 6.44755L4.94661 7.6055ZM14.0534 3.48832L19.0534 7.6055L20.0069 6.44755L15.0069 2.33037L14.0534 3.48832ZM9.94661 3.48832C11.1421 2.50389 12.8579 2.50389 14.0534 3.48832L15.0069 2.33037C13.2575 0.889875 10.7425 0.889879 8.99311 2.33037L9.94661 3.48832ZM7 21.25C5.2109 21.25 3.75 19.7859 3.75 17.9668H2.25C2.25 20.6027 4.37082 22.75 7 22.75V21.25ZM20.25 17.9668C20.25 19.7859 18.7891 21.25 17 21.25V22.75C19.6292 22.75 21.75 20.6027 21.75 17.9668H20.25ZM21.75 10.1503C21.75 8.71654 21.1111 7.35681 20.0069 6.44755L19.0534 7.6055C19.8096 8.22818 20.25 9.16221 20.25 10.1503H21.75ZM3.75 10.1503C3.75 9.16221 4.1904 8.22819 4.94661 7.6055L3.99311 6.44755C2.88889 7.35681 2.25 8.71654 2.25 10.1503H3.75Z"/>
            <path d="M10 18H14" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>
        )
    } else if (option === 'solid') {
        return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={fillColor} fill-rule="evenodd" clip-rule="evenodd" d="M21 10.1503V17.9668C21 20.1943 19.2091 22 17 22H7C4.79086 22 3 20.1943 3 17.9668V10.1503C3 8.93937 3.53964 7.7925 4.46986 7.02652L9.46986 2.90935C10.9423 1.69689 13.0577 1.69688 14.5301 2.90935L19.5301 7.02652C20.4604 7.7925 21 8.93937 21 10.1503ZM10 17.25C9.58579 17.25 9.25 17.5858 9.25 18C9.25 18.4142 9.58579 18.75 10 18.75H14C14.4142 18.75 14.75 18.4142 14.75 18C14.75 17.5858 14.4142 17.25 14 17.25H10Z"/>
        </svg>
        )
    }
}

export default AllElements_Icon;