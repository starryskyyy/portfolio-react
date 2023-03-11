import React, { useState, useEffect } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
    return (
        <div className="project-card relative">
            <img src={imageUrl} alt={title} className="rounded-t-md" />
            <div className="project-info p-4">
                <h3>{title}</h3>
                <p>{description}</p>
                <br></br>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="mt-4 p-2 border-solid border border-lines rounded-md bg-lines text-white text-sm">view-project</a>
            </div>
        </div>
    );
};

export default function Projects() {


    const projectData = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'https://via.placeholder.com/350x250',
            projectUrl: 'https://example.com/project1',
            tags: ['React', 'Tailwind']
        },
        {
            title: 'Project 2',
            description: 'Nulla euismod aliquam erat, eget consectetur quam suscipit nec.',
            imageUrl: 'https://via.placeholder.com/350x250',
            projectUrl: 'https://example.com/project2',
            tags: ['React', 'Firebase']
        },
        {
            title: 'Project 3',
            description: 'Morbi fermentum, ipsum sit amet auctor tincidunt, justo quam accumsan metus, sit amet malesuada odio lorem quis neque.',
            imageUrl: 'https://via.placeholder.com/350x250',
            projectUrl: 'https://example.com/project3',
            tags: ['Node.js', 'MongoDB']
        },
        {
            title: 'Project 3',
            description: 'Morbi fermentum, ipsum sit amet auctor tincidunt, justo quam accumsan metus, sit amet malesuada odio lorem quis neque.',
            imageUrl: 'https://via.placeholder.com/350x250',
            projectUrl: 'https://example.com/project3',
            tags: ['Node.js', 'MongoDB']
        },
        {
            title: 'Project 3',
            description: 'Morbi fermentum, ipsum sit amet auctor tincidunt, justo quam accumsan metus, sit amet malesuada odio lorem quis neque.',
            imageUrl: 'https://via.placeholder.com/350x250',
            projectUrl: 'https://example.com/project3',
            tags: ['Node.js', 'MongoDB']
        },
        {
            title: 'Project 3',
            description: 'Morbi fermentum, ipsum sit amet auctor tincidunt, justo quam accumsan metus, sit amet malesuada odio lorem quis neque.',
            imageUrl: 'https://via.placeholder.com/350x250',
            projectUrl: 'https://example.com/project3',
            tags: ['Node.js', 'MongoDB']
        },
        {
            title: 'Project 3',
            description: 'Morbi fermentum, ipsum sit amet auctor tincidunt, justo quam accumsan metus, sit amet malesuada odio lorem quis neque.',
            imageUrl: 'https://via.placeholder.com/350x250',
            projectUrl: 'https://example.com/project3',
            tags: ['Node.js', 'MongoDB']
        },
        {
            title: 'Project 3',
            description: 'Morbi fermentum, ipsum sit amet auctor tincidunt, justo quam accumsan metus, sit amet malesuada odio lorem quis neque.',
            imageUrl: 'https://via.placeholder.com/350x250',
            projectUrl: 'https://example.com/project3',
            tags: ['Node.js', 'MongoDB']
        },
        {
            title: 'Project 3',
            description: 'Morbi fermentum, ipsum sit amet auctor tincidunt, justo quam accumsan metus, sit amet malesuada odio lorem quis neque.',
            imageUrl: 'https://via.placeholder.com/350x250',
            projectUrl: 'https://example.com/project3',
            tags: ['Node.js', 'MongoDB']
        },
        {
            title: 'Project 3',
            description: 'Morbi fermentum, ipsum sit amet auctor tincidunt, justo quam accumsan metus, sit amet malesuada odio lorem quis neque.',
            imageUrl: 'https://via.placeholder.com/350x250',
            projectUrl: 'https://example.com/project3',
            tags: ['Node.js', 'MongoDB']
        },
        {
            title: 'Project 3',
            description: 'Morbi fermentum, ipsum sit amet auctor tincidunt, justo quam accumsan metus, sit amet malesuada odio lorem quis neque.',
            imageUrl: 'https://via.placeholder.com/350x250',
            projectUrl: 'https://example.com/project3',
            tags: ['Node.js', 'MongoDB']
        },
        {
            title: 'Project 3',
            description: 'Morbi fermentum, ipsum sit amet auctor tincidunt, justo quam accumsan metus, sit amet malesuada odio lorem quis neque.',
            imageUrl: 'https://via.placeholder.com/350x250',
            projectUrl: 'https://example.com/project3',
            tags: ['Node.js', 'MongoDB']
        }
    ];


    const [selectedTags, setSelectedTags] = useState([]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedTags([...selectedTags, value]);
        } else {
            setSelectedTags(selectedTags.filter(tag => tag !== value));
        }
    };

    const shouldShowCard = (cardTags) => {
        if (selectedTags.length === 0) {
            return true;
        }
        return cardTags.some(tag => selectedTags.includes(tag));
    };


    return (
        <div className="w-full bg-primary-2 border-solid border border-lines rounded-md h-full">
            <div class="flex flex-col h-full justify-between">
                <header class="h-auto"><NavBar /></header>
                <main class="mb-auto h-full w-full">
                    <div className="flex flex-row h-full">
                        <div className="h-full w-60 border-solid border-r border-lines">
                            <div className="border-solid border-b border-lines">
                                <p className="p-2 text-white">filter-projects</p>
                            </div>
                            <div className="p-6 text-secondary-1 text-sm">
                                <label className="inline-flex items-center ml-4 mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 "
                                        value="JavaScript"
                                        checked={selectedTags.includes('JavaScript')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <div className="flex items-center pl-2">
                                        <svg width="20" height="20" className="mr-2" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_2909_982)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H18V18H0V0ZM13.76 15.0897C12.9257 15.0897 12.454 14.6545 12.0914 14.0626L10.7168 14.8612C11.2134 15.8422 12.2283 16.5908 13.7992 16.5908C15.4057 16.5908 16.602 15.7566 16.602 14.2337C16.602 12.8212 15.7906 12.1928 14.3534 11.5766L13.9306 11.3954C13.2049 11.0812 12.8906 10.8757 12.8906 10.3683C12.8906 9.95775 13.2046 9.64342 13.7 9.64342C14.1857 9.64342 14.4985 9.84825 14.7886 10.3683L16.1057 9.5226C15.5486 8.54258 14.7755 8.16825 13.7 8.16825C12.1895 8.16825 11.2229 9.13402 11.2229 10.4026C11.2229 11.7797 12.0337 12.4312 13.2543 12.9511L13.6772 13.1326C14.4486 13.47 14.9086 13.6754 14.9086 14.2554C14.9086 14.7395 14.4608 15.0897 13.76 15.0897ZM7.20485 15.0791C6.62371 15.0791 6.382 14.6806 6.11628 14.2091L4.73942 15.0427C5.13828 15.8869 5.92257 16.5878 7.27685 16.5878C8.77567 16.5878 9.80257 15.7906 9.80257 14.0392V8.26485H8.11118V14.0163C8.11118 14.8617 7.76055 15.0791 7.20485 15.0791Z" fill="#607B96" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2909_982">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <p>JavaScript</p>
                                    </div>
                                </label>
                                <label className="inline-flex items-center ml-4 mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-gray-600"
                                        value="Java"
                                        checked={selectedTags.includes('Java')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <div className="flex items-center pl-2">
                                        <svg width="20" height="20" className="mr-2" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.78069 4.44687C7.67173 5.22683 6.41485 6.11089 5.74143 7.57347C4.57173 10.125 8.13497 12.9084 8.28723 13.0256C8.32264 13.0529 8.36498 13.0665 8.40723 13.0665C8.45209 13.0665 8.49702 13.0511 8.53353 13.0206C8.60427 12.9614 8.62433 12.8609 8.58184 12.7791C8.56894 12.7542 7.28994 10.2699 7.33747 8.48751C7.35431 7.86682 8.22302 7.16264 9.14273 6.41707C9.98509 5.73421 10.9399 4.96023 11.4986 4.05485C12.725 2.06191 11.3619 0.102255 11.348 0.08274C11.2938 0.00672717 11.1939 -0.0208924 11.1084 0.0166419C11.0231 0.0542549 10.9758 0.146635 10.9953 0.237835C10.998 0.25074 11.2631 1.54666 10.5255 2.88176C10.2215 3.43344 9.55388 3.90313 8.78069 4.44687Z" fill="#607B96" />
                                            <path d="M13.4529 5.32574C13.5311 5.2668 13.5541 5.15931 13.5067 5.07354C13.4594 4.98777 13.3562 4.94992 13.2646 4.9847C13.0762 5.05631 8.65137 6.76188 8.65137 8.8228C8.65137 10.2434 9.25821 10.9939 9.7013 11.542C9.87513 11.7569 10.0252 11.9425 10.0746 12.101C10.2138 12.5577 9.88402 13.3831 9.74537 13.6626C9.7054 13.743 9.72499 13.8404 9.79298 13.8991C9.82972 13.9308 9.8756 13.9468 9.92155 13.9468C9.96066 13.9468 9.99993 13.9352 10.0338 13.9116C10.1099 13.8586 11.8932 12.5978 11.5734 11.0787C11.4542 10.5014 11.1705 10.0795 10.9201 9.70718C10.5323 9.13047 10.2521 8.71382 10.6771 7.94433C11.1752 7.04697 13.4302 5.34281 13.4529 5.32574Z" fill="#607B96" />
                                            <path d="M1.9348 13.9796C1.85895 14.2067 1.89475 14.4321 2.03828 14.6314C2.51796 15.2973 4.217 15.664 6.82268 15.664C6.82284 15.664 6.82299 15.664 6.82299 15.664C7.17607 15.664 7.54882 15.6571 7.93061 15.6434C12.0966 15.4942 13.6418 14.1964 13.7055 14.1413C13.775 14.0811 13.7936 13.981 13.7504 13.8999C13.7072 13.819 13.614 13.7783 13.525 13.8027C12.0579 14.2033 9.31812 14.3455 7.4178 14.3455C5.29141 14.3455 4.2085 14.1924 3.9434 14.0793C4.07945 13.8925 4.9185 13.559 5.95821 13.3545C6.05759 13.3349 6.1259 13.2432 6.11606 13.1424C6.10622 13.0416 6.02155 12.9647 5.92028 12.9647C5.31076 12.9648 2.25428 13.0137 1.9348 13.9796Z" fill="#607B96" />
                                            <path d="M15.8751 12.643C15.0158 12.643 14.201 13.0736 14.1667 13.092C14.0872 13.1345 14.0469 13.2256 14.0687 13.3131C14.0906 13.4006 14.1692 13.462 14.2594 13.4621C14.2776 13.4622 16.0922 13.477 16.2566 14.5138C16.4022 15.4082 14.5396 16.8575 13.8096 17.3405C13.7308 17.3927 13.7002 17.4935 13.7368 17.5806C13.7679 17.6549 13.8402 17.7013 13.9181 17.7013C13.9317 17.7013 13.9455 17.6999 13.9592 17.6969C14.1324 17.6599 18.1969 16.7643 17.7672 14.3977C17.505 12.9474 16.5935 12.643 15.8751 12.643Z" fill="#607B96" />
                                            <path d="M13.0878 17.0509C13.102 16.9751 13.0704 16.898 13.0073 16.8537L12.0327 16.1711C11.9852 16.1378 11.9252 16.1274 11.8694 16.1422C11.8592 16.1448 10.8401 16.4127 9.3604 16.577C8.77315 16.6428 8.1154 16.6776 7.45811 16.6776C5.97885 16.6776 5.01162 16.5038 4.87077 16.3763C4.85212 16.3405 4.85802 16.3242 4.86132 16.3152C4.8869 16.244 5.02405 16.1594 5.1125 16.1259C5.21015 16.0898 5.26279 15.9838 5.23242 15.8841C5.20212 15.7845 5.09943 15.7258 4.99808 15.7502C4.02046 15.9861 3.54243 16.3161 3.57721 16.7307C3.63898 17.4659 5.34203 17.8433 6.78179 17.9432C6.98882 17.9573 7.21277 17.9646 7.44718 17.9646C7.44733 17.9646 7.44741 17.9646 7.44757 17.9646C9.84166 17.9646 12.9108 17.2134 12.9415 17.2058C13.0164 17.1873 13.0735 17.1268 13.0878 17.0509Z" fill="#607B96" />
                                            <path d="M5.74039 18.629C5.81419 18.5809 5.84693 18.4897 5.82073 18.4057C5.7946 18.3217 5.71599 18.2665 5.6277 18.2676C5.49669 18.2711 4.34571 18.323 4.26514 19.0558C4.24074 19.2748 4.30346 19.4748 4.45163 19.6504C4.8649 20.1401 5.98038 20.4312 7.86135 20.5404C8.08388 20.5537 8.30987 20.5603 8.53327 20.5603C10.9246 20.5603 12.5351 19.8116 12.6026 19.7798C12.6679 19.7488 12.7111 19.6846 12.7149 19.6124C12.7188 19.5402 12.6827 19.4717 12.621 19.434L11.3894 18.6821C11.3467 18.6561 11.2955 18.6474 11.2468 18.6574C11.239 18.6591 10.457 18.8212 9.27679 18.9815C9.05348 19.0118 8.77382 19.0273 8.44569 19.0273C7.26678 19.0273 5.95552 18.8346 5.70403 18.7086C5.70041 18.6849 5.70505 18.655 5.74039 18.629Z" fill="#607B96" />
                                            <path d="M7.41874 22.821C12.8962 22.8163 15.8361 21.8422 16.4024 21.2293C16.6029 21.0123 16.6246 20.807 16.6075 20.6729C16.5654 20.3429 16.2649 20.1409 16.2307 20.119C16.1485 20.0661 16.0382 20.0799 15.974 20.1539C15.9101 20.228 15.9086 20.336 15.9728 20.4099C16.0073 20.4543 16.0273 20.5287 15.9263 20.6298C15.6999 20.8413 13.4164 21.4831 9.6143 21.6759C9.09347 21.703 8.54721 21.7167 7.99073 21.7168C4.58652 21.7168 2.09517 21.2506 1.76814 20.9788C1.89428 20.7977 2.77543 20.5083 3.71261 20.3447C3.81821 20.3263 3.88958 20.2268 3.87321 20.1209C3.85684 20.0149 3.75919 19.942 3.65249 19.9559C3.62605 19.9595 3.53642 19.965 3.43248 19.9713C1.88617 20.0657 0.0992406 20.2762 0.00599496 21.0728C-0.0223328 21.3157 0.0498242 21.536 0.220499 21.7278C0.638098 22.1971 1.83849 22.8209 7.41851 22.8209C7.41867 22.821 7.41874 22.821 7.41874 22.821Z" fill="#607B96" />
                                            <path d="M17.4784 21.402C17.4009 21.3662 17.3095 21.3843 17.2517 21.4466C17.2436 21.4553 16.4201 22.3164 13.944 22.8221C12.9961 23.012 11.2167 23.1083 8.6553 23.1083C6.08912 23.1083 3.64734 23.0074 3.62295 23.0064C3.52097 23.0014 3.4337 23.0755 3.41985 23.1759C3.40592 23.2763 3.47061 23.3708 3.56912 23.3943C3.59454 23.4004 6.15356 23.9999 9.65251 23.9999C11.3307 23.9999 12.9637 23.8635 14.5063 23.5946C17.3826 23.0903 17.584 21.6641 17.5911 21.6037C17.6011 21.5192 17.5556 21.4378 17.4784 21.402Z" fill="#607B96" />
                                        </svg>
                                        <p>Java</p>
                                    </div>
                                </label>
                                <label className="inline-flex items-center ml-4 mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-gray-600"
                                        value="CSarp"
                                        checked={selectedTags.includes('CSarp')}
                                        onChange={handleCheckboxChange} />
                                    <div className="flex items-center pl-2 ">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.771 17.2499C20.9123 16.9963 21 16.7105 21 16.4539V7.54598C21 7.28935 20.9123 7.00364 20.771 6.75L12 12L20.771 17.2499Z" fill="#607B96" />
                                            <path d="M12.7796 22.3075L20.2208 17.8535C20.4352 17.7252 20.63 17.5037 20.7713 17.25L12.0002 12L3.22925 17.25C3.37049 17.5037 3.56537 17.7253 3.77967 17.8535L11.2208 22.3075C11.6495 22.5641 12.351 22.5641 12.7796 22.3075Z" fill="#607B96" />
                                            <path d="M20.771 6.74997C20.6298 6.49627 20.4349 6.27472 20.2206 6.14641L12.7794 1.69246C12.3508 1.43585 11.6492 1.43585 11.2206 1.69246L3.77941 6.14641C3.35071 6.40297 3 7.03282 3 7.54598V16.454C3 16.7105 3.0877 16.9963 3.229 17.25L12 12L20.771 6.74997Z" fill="#607B96" />
                                            <path d="M12.0289 18C8.70457 18 6 15.3084 6 12C6 8.6916 8.70457 6 12.0289 6C14.1343 6 16.1005 7.10677 17.1892 8.89635L14.6074 10.4449C14.0619 9.552 13.0799 9 12.0289 9C10.3666 9 9.01448 10.3458 9.01448 12C9.01448 13.6542 10.3666 15 12.0289 15C13.0771 15 14.0566 14.4511 14.603 13.5624L17.1904 15.1019C16.1019 16.8926 14.135 18 12.0289 18Z" fill="#011627" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7501 9.75V10.4981H17.2499V9.75H16.5001V10.4981H15.75V11.25H16.5001V12.7461H15.75V13.5H16.5001V14.25H17.2499L17.25 13.5H18.7501V14.25H19.4999V13.5H20.25V12.75H19.4999V11.25H20.25V10.4981H19.4999V9.75H18.7501ZM18.7501 12.75V11.25H17.2499V12.7461L18.7501 12.75Z" fill="#011627" />
                                        </svg>
                                        <p>C#</p>
                                    </div>
                                </label>
                                <label className="inline-flex items-center ml-4 mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-gray-600"
                                        value="HTML"
                                        checked={selectedTags.includes('HTML')}
                                        onChange={handleCheckboxChange} />
                                    <div className="flex items-center pl-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 18.178l4.62-1.256.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866-2.52.667-2.52-.667-.158-1.844h-2.27l.329 3.544L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2z" fill="rgba(96,123,150,1)" /></svg>
                                        <p>HTML</p>
                                    </div>
                                </label>
                                <label className="inline-flex items-center ml-4 mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-gray-600"
                                        value="React"
                                        checked={selectedTags.includes('React')}
                                        onChange={handleCheckboxChange} />
                                    <div className="flex items-center pl-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-.528 2.994c.175.21.351.414.528.609.177-.195.353-.398.528-.609a24.883 24.883 0 0 1-1.056 0zm-1.995-.125a20.678 20.678 0 0 1-2.285-.368c-.075.35-.132.69-.17 1.016-.19 1.583.075 2.545.478 2.777.403.233 1.368-.019 2.645-.974.263-.197.528-.416.794-.655a20.678 20.678 0 0 1-1.462-1.796zm7.331-.368c-.717.16-1.483.284-2.285.368a20.678 20.678 0 0 1-1.462 1.796c.266.24.531.458.794.655 1.277.955 2.242 1.207 2.645.974.403-.232.667-1.194.479-2.777a11.36 11.36 0 0 0-.17-1.016zm1.45-.387c.577 2.639.274 4.74-1.008 5.48-1.282.74-3.253-.048-5.25-1.867-1.997 1.819-3.968 2.606-5.25 1.866-1.282-.74-1.585-2.84-1.009-5.48C3.167 14.794 1.5 13.48 1.5 12s1.667-2.793 4.241-3.614c-.576-2.639-.273-4.74 1.009-5.48 1.282-.74 3.253.048 5.25 1.867 1.997-1.819 3.968-2.606 5.25-1.866 1.282.74 1.585 2.84 1.009 5.48C20.833 9.206 22.5 10.52 22.5 12s-1.667 2.793-4.241 3.614zm-7.32-9.779a11.36 11.36 0 0 0-.793-.655C8.868 4.225 7.903 3.973 7.5 4.206c-.403.232-.667 1.194-.479 2.777.04.327.096.666.17 1.016a20.678 20.678 0 0 1 2.286-.368c.475-.653.965-1.254 1.462-1.796zm3.585 1.796c.802.084 1.568.209 2.285.368.075-.35.132-.69.17-1.016.19-1.583-.075-2.545-.478-2.777-.403-.233-1.368.019-2.645.974a11.36 11.36 0 0 0-.794.655c.497.542.987 1.143 1.462 1.796zm-1.995-.125c-.175-.21-.351-.414-.528-.609-.177.195-.353.398-.528.609a24.884 24.884 0 0 1 1.056 0zm-4.156 7.198a24.884 24.884 0 0 1-.528-.914c-.095.257-.183.51-.263.761.257.056.521.107.79.153zm1.932.234a22.897 22.897 0 0 0 3.392 0A22.897 22.897 0 0 0 15.392 12a22.897 22.897 0 0 0-1.696-2.938 22.897 22.897 0 0 0-3.392 0A22.897 22.897 0 0 0 8.608 12a22.897 22.897 0 0 0 1.696 2.938zm5.852-4.728c.095-.257.183-.51.263-.761a17.974 17.974 0 0 0-.79-.153 24.884 24.884 0 0 1 .527.914zM6.13 9.837c-.34.11-.662.23-.964.36C3.701 10.825 3 11.535 3 12c0 .465.7 1.175 2.166 1.803.302.13.624.25.964.36.222-.7.497-1.426.825-2.163a20.678 20.678 0 0 1-.825-2.163zm1.45-.388c.081.25.169.504.264.76a24.884 24.884 0 0 1 .528-.913c-.27.046-.534.097-.791.153zm10.29 4.714c.34-.11.662-.23.964-.36C20.299 13.175 21 12.465 21 12c0-.465-.7-1.175-2.166-1.803a11.36 11.36 0 0 0-.964-.36c-.222.7-.497 1.426-.825 2.163.328.737.603 1.462.825 2.163zm-1.45.388c-.081-.25-.169-.504-.264-.76a24.884 24.884 0 0 1-.528.913c.27-.046.534-.097.791-.153z" fill="rgba(96,123,150,1)" /></svg>
                                        <p>React</p>
                                    </div>
                                </label>
                                <label className="inline-flex items-center ml-4 mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-gray-600"
                                        value="Express"
                                        checked={selectedTags.includes('Express')}
                                        onChange={handleCheckboxChange} />
                                    <div className="flex items-center pl-2 ">
                                        <svg width="20" height="14" viewBox="0 0 24 14" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 13.6236C23.6507 13.7564 23.2651 13.7561 22.916 13.6228C22.5669 13.4894 22.2785 13.2323 22.105 12.8998L18.655 8.10335L18.155 7.43279L14.152 12.9058C13.989 13.2243 13.7162 13.4723 13.3845 13.6033C13.0529 13.7343 12.6851 13.7394 12.35 13.6176L17.508 6.6607L12.71 0.376397C13.055 0.251409 13.4323 0.249752 13.7784 0.371704C14.1244 0.493657 14.4181 0.731769 14.61 1.04595L18.186 5.90168L21.782 1.06605C21.9463 0.753181 22.2192 0.511903 22.5488 0.388087C22.8785 0.264272 23.2419 0.266551 23.57 0.394493L21.708 2.87866L19.186 6.17915C19.116 6.24196 19.0599 6.31894 19.0216 6.40505C18.9832 6.49115 18.9633 6.58444 18.9633 6.6788C18.9633 6.77315 18.9832 6.86644 19.0216 6.95255C19.0599 7.03865 19.116 7.11564 19.186 7.17845L23.99 13.6246L24 13.6236ZM0.002012 6.57424L0.422012 4.48819C1.57601 0.363328 6.28001 -1.35277 9.51601 1.20077C11.411 2.6977 11.884 4.81693 11.791 7.20559H1.11601C0.943012 11.4712 4.00501 14.0468 7.92001 12.7309C8.55467 12.5012 9.12275 12.1169 9.57337 11.6123C10.024 11.1077 10.3431 10.4986 10.502 9.83955C10.709 9.17 11.05 9.05539 11.676 9.24841C11.5717 10.0651 11.2845 10.8474 10.8361 11.5365C10.3876 12.2255 9.78963 12.8033 9.08701 13.2265C7.92643 13.8647 6.59484 14.1177 5.28264 13.9492C3.97043 13.7807 2.74481 13.1995 1.78101 12.2885C0.828041 11.2102 0.252088 9.84809 0.141012 8.40997C0.141012 8.17372 0.061012 7.95255 0.007012 7.74042C0.00214403 7.35205 -0.000189357 6.96365 1.19963e-05 6.57525L0.002012 6.57424ZM1.12901 6.28672H10.783C10.723 3.19433 8.78201 1.00071 6.19301 0.980599C3.31101 0.940386 1.24901 3.08576 1.12201 6.27264L1.12901 6.28672Z" fill="#607B96" />
                                        </svg>
                                        <p>Express</p>
                                    </div>
                                </label>
                                <label className="inline-flex items-center ml-4 mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-gray-600"
                                        value="MongoDB"
                                        checked={selectedTags.includes('MongoDB')}
                                        onChange={handleCheckboxChange} />
                                    <div className="flex items-center pl-2 ">
                                        <svg width="20" height="20" viewBox="0 0 12 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.86576 17.3888C5.86576 17.3888 5.86576 9.618 6.12376 9.61875C6.32326 9.61875 6.58276 19.6425 6.58276 19.6425C6.22576 19.6005 5.86576 17.9933 5.86576 17.3888ZM10.8668 9.70875C10.1775 6.69675 8.66776 4.107 6.58576 2.10825L6.58051 2.10375C6.32701 1.71675 6.09526 1.27275 5.90926 0.804754L5.89126 0.753754C5.89201 0.768754 5.89201 0.786754 5.89201 0.804754C5.89201 1.2285 5.70226 1.60725 5.40301 1.8615L5.40076 1.863C2.72026 4.1385 1.01476 7.49175 0.958513 11.244V11.2538C0.957763 11.3003 0.957764 11.355 0.957764 11.4098C0.957764 15.1275 2.74651 18.4275 5.51026 20.496L5.53951 20.517L5.60476 20.5643C5.72526 21.4563 5.82826 22.3503 5.91376 23.2463H6.36451C6.48901 22.128 6.65701 21.1493 6.87676 20.1893L6.84226 20.3685C7.13926 20.1623 7.39876 19.9485 7.64101 19.7168L7.63876 19.719C9.73951 17.7713 11.0505 14.9963 11.0505 11.916C11.0505 11.8703 11.0505 11.8253 11.0498 11.7795V11.7863C11.0475 11.0505 10.9808 10.3313 10.854 9.633L10.8653 9.70725L10.8668 9.70875Z" fill="#607B96" />
                                        </svg>
                                        <p>MongoDB</p>
                                    </div>
                                </label>
                                <label className="inline-flex items-center ml-4 mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-gray-600"
                                        value="Python"
                                        checked={selectedTags.includes('Python')}
                                        onChange={handleCheckboxChange} />
                                    <div className="flex items-center pl-2 ">
                                        <svg width="20" height="20" viewBox="0 0 24 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9848 1.84691C9.10263 1.84691 6.78227 3.00764 6.78227 4.44873V6.49964L11.9914 6.52036L11.9695 7.04945H4.18045C2.74045 7.04945 1.58081 9.36982 1.58081 12.2531C1.58081 15.1331 2.74045 17.4545 4.18154 17.4545H6.2619C6.2619 16.1433 6.34263 15.1505 6.53463 14.3836C6.72663 13.6167 7.03863 13.0669 7.4979 12.6993C8.41645 11.964 9.77354 11.9924 11.7252 11.9924C13.9354 11.9924 15.3197 11.9629 16.0888 11.3924C16.4739 11.1087 16.7423 10.6855 16.9234 9.99164C17.1044 9.29673 17.1874 8.34 17.1874 7.04945H17.7077C17.7077 8.36182 17.627 9.35455 17.4263 10.1225C17.2255 10.8916 16.8917 11.4458 16.3997 11.8102C15.4124 12.5411 13.9354 12.5127 11.7252 12.5127C9.77354 12.5127 8.5299 12.54 7.82299 13.1051C7.46954 13.3887 7.21208 13.8142 7.03863 14.5102C6.86408 15.2062 6.78227 16.1651 6.78227 17.4545V20.0553C6.78227 21.4964 9.10263 22.6571 11.9859 22.6571C14.867 22.6571 17.1874 21.4964 17.1874 20.0553V17.9836L12.0001 17.9847V17.4545H19.7892C21.2292 17.4545 22.3899 15.1342 22.3899 12.252C22.3899 9.36982 21.2292 7.04945 19.7881 7.04945H17.1874V4.44873C17.1874 3.00764 14.867 1.848 11.9848 1.848V1.84691ZM9.11572 3.48655H9.12336C9.37826 3.48741 9.6224 3.58939 9.80218 3.77009C9.98197 3.9508 10.0827 4.19546 10.0823 4.45036C10.0818 4.70526 9.98027 4.94957 9.79987 5.12967C9.61947 5.30976 9.37499 5.4109 9.12008 5.4109C8.86518 5.4109 8.62069 5.30976 8.4403 5.12967C8.2599 4.94957 8.15834 4.70526 8.1579 4.45036C8.15747 4.19546 8.2582 3.9508 8.43798 3.77009C8.61777 3.58939 8.86191 3.48741 9.11681 3.48655H9.11572ZM14.8397 19.0931H14.8463C15.1012 19.094 15.3453 19.1959 15.5251 19.3766C15.7049 19.5573 15.8056 19.802 15.8052 20.0569C15.8047 20.3118 15.7032 20.5561 15.5228 20.7362C15.3424 20.9163 15.0979 21.0174 14.843 21.0174C14.5881 21.0174 14.3436 20.9163 14.1632 20.7362C13.9828 20.5561 13.8812 20.3118 13.8808 20.0569C13.8804 19.802 13.9811 19.5573 14.1609 19.3766C14.3407 19.1959 14.5848 19.094 14.8397 19.0931Z" fill="#607B96" />
                                        </svg>
                                        <p>Python</p>
                                    </div>
                                </label>
                                <label className="inline-flex items-center ml-4 mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-gray-600"
                                        value="ASP"
                                        checked={selectedTags.includes('ASP')}
                                        onChange={handleCheckboxChange} />
                                    <div className="flex items-center pl-2 ">
                                        <svg width="20" height="10" className="mr-2" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 1.77001H21.532V9.33501H20.107V1.77001H17.645V0.530007H24V1.77001ZM17.148 9.33501H12.327V0.530007H16.957V1.77001H13.752V4.26401H16.705V5.49801H13.752V8.10201H17.148V9.33501ZM10.44 9.33501H8.882L4.78 2.86301C4.67739 2.70193 4.59097 2.5311 4.522 2.35301H4.486C4.518 2.54201 4.534 2.94501 4.534 3.56301V9.33501H3.157V0.530007H4.816L8.781 6.85001C8.948 7.11101 9.056 7.29201 9.104 7.39001H9.128C9.088 7.15701 9.068 6.76101 9.068 6.20501V0.529007H10.44V9.33501ZM1.737 8.64201C1.737 8.75095 1.71452 8.85883 1.67083 8.95947C1.62715 9.06011 1.56312 9.15154 1.48242 9.22854C1.40171 9.30553 1.3059 9.36657 1.20048 9.40818C1.09505 9.44978 0.982072 9.47113 0.868001 9.47101C0.753925 9.47101 0.640968 9.44953 0.535589 9.40781C0.43021 9.36608 0.334476 9.30493 0.253861 9.22785C0.173247 9.15076 0.109332 9.05925 0.0657724 8.95856C0.022213 8.85786 -0.000136975 8.74996 6.31568e-07 8.64101C0.000278106 8.42132 0.0918503 8.21071 0.254602 8.05546C0.417353 7.90021 0.637974 7.81301 0.868001 7.81301C0.982072 7.81288 1.09505 7.83423 1.20048 7.87584C1.3059 7.91744 1.40171 7.97849 1.48242 8.05548C1.56312 8.13247 1.62715 8.2239 1.67083 8.32454C1.71452 8.42518 1.737 8.53306 1.737 8.64201Z" fill="#607B96" />
                                        </svg>
                                        <p>ASP.Net</p>
                                    </div>
                                </label>
                                <label className="inline-flex items-center ml-4 mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-gray-600"
                                        value="Spring"
                                        checked={selectedTags.includes('Spring')}
                                        onChange={handleCheckboxChange} />
                                    <div className="flex items-center pl-2 ">
                                        <svg width="20" height="20" className="mr-2" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.205 15.392C15.736 18.681 10.464 17.571 7.083 17.73C7.083 17.73 6.484 17.764 5.882 17.863C5.882 17.863 6.11 17.766 6.401 17.665C8.775 16.844 9.897 16.679 11.34 15.938C14.05 14.55 16.748 11.525 17.297 8.383C16.265 11.405 13.127 14.006 10.27 15.062C8.315 15.784 4.778 16.486 4.777 16.486C4.72895 16.4614 4.68128 16.4361 4.634 16.41C2.229 15.24 2.159 10.03 6.528 8.351C8.444 7.615 10.275 8.019 12.346 7.526C14.554 7.001 17.112 5.346 18.151 3.182C19.316 6.64 20.716 12.048 18.205 15.392ZM18.247 2.112C17.9677 2.78175 17.6102 3.41615 17.182 4.002C16.2512 3.04265 15.1372 2.28002 13.906 1.75936C12.6749 1.2387 11.3517 0.970609 10.015 0.971001C4.492 0.971001 1.09429e-06 5.463 1.09429e-06 10.985C-0.000643809 12.3624 0.283767 13.7251 0.835342 14.9873C1.38692 16.2494 2.19372 17.3838 3.205 18.319L3.425 18.513C3.26465 18.3524 3.17464 18.1347 3.17478 17.9077C3.17493 17.6807 3.2652 17.4631 3.42575 17.3027C3.58631 17.1423 3.804 17.0522 4.03096 17.0522C4.25793 17.0523 4.47558 17.1424 4.63607 17.3029C4.79656 17.4634 4.88674 17.6811 4.88678 17.908C4.88683 18.135 4.79674 18.3527 4.63632 18.5133C4.4759 18.6738 4.25828 18.7641 4.03131 18.7642C3.80435 18.7644 3.58662 18.6744 3.426 18.514L3.575 18.646C5.3754 20.1681 7.65739 21.0023 10.015 21C15.293 21 19.628 16.892 19.999 11.708C20.273 9.169 19.523 5.945 18.247 2.112Z" fill="#607B96" />
                                        </svg>

                                        <p>Spring Boot</p>
                                    </div>
                                </label>
                                <label className="inline-flex items-center ml-4 mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-gray-600"
                                        value="Swift"
                                        checked={selectedTags.includes('Swift')}
                                        onChange={handleCheckboxChange} />
                                    <div className="flex items-center pl-2 ">
                                        <svg width="20" height="19" className="mr-2" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8662 17.2555C16.0371 18.6224 12.1472 18.7629 8.23354 17.36C5.06475 16.2324 2.43548 14.2585 0.75 12.0032C1.55903 12.5671 2.50288 13.0183 3.51415 13.4128C7.5558 14.9972 11.5966 14.8887 14.4403 13.4168C10.3951 10.8229 6.95251 7.43548 4.39072 4.67274C3.85114 4.22159 3.44662 3.65768 3.0421 3.15021C6.14336 5.5185 11.0651 8.50691 12.8176 9.35313C9.11015 6.08231 5.80637 2.02259 5.94094 2.13514C11.8065 7.09736 17.2677 9.91689 17.2677 9.91689C17.4484 10.0021 17.5879 10.0731 17.7 10.1365C17.8182 9.88499 17.9218 9.62385 18.0092 9.35313C18.953 6.4773 17.8746 3.20648 15.5146 0.5C20.9753 3.26302 24.2118 8.45061 22.863 12.7927C22.8279 12.9099 22.7896 13.0255 22.7484 13.139C25.4448 15.9586 24.7507 18.9957 24.4137 18.4318C22.9509 16.0377 20.243 16.7698 18.8662 17.2555Z" fill="#607B96" />
                                        </svg>
                                        <p>Swift</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="w-full overflow-y-scroll h-200">
                            <div className="border-solid border-b border-lines p-5"></div>
                            <div className="flex flex-wrap">
                                {projectData.map((project, index) => (
                                    shouldShowCard(project.tags) && (
                                        <div className="w-72 m-10 border-solid border border-lines rounded-md bg-primary-3 text-secondary-1">
                                            <ProjectCard
                                                key={index}
                                                title={project.title}
                                                description={project.description}
                                                imageUrl={project.imageUrl}
                                                projectUrl={project.projectUrl}
                                                tags={project.tags}
                                            />
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <footer class="h-auto"><Footer /></footer>
            </div>
        </div>

    )
}
