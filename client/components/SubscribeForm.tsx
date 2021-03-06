import React from 'react';

const SubscribeForm: React.FC<{}> = () => {
    return (
        <div className='text-center mb-8'>
            <div className='mb-4'>
                Hit the Subscribe button for the latest news on my tools. No spam. Ever!
            </div>
            <form
                action="https://csslayout.us4.list-manage.com/subscribe/post?u=77d0bf6497a2cdbb36f08587c&amp;id=e8a912009a"
                method="post"
                name="mc-embedded-subscribe-form"
                target="_blank"
                noValidate={true}
            >
                <input
                    className='border border-gray-400 p-2 w-56 sm:w-64'
                    type="email"
                    name="EMAIL"
                    placeholder="Email address"
                    required={true}
                />
                <div style={{ left: '-5000px', position: 'absolute' }} aria-hidden="true">
                    <input type="text" name="b_77d0bf6497a2cdbb36f08587c_e8a912009a" tabIndex={-1} />
                </div>
                <button
                    type="submit"
                    name="subscribe"
                    className='bg-blue-600 border border-blue-600 px-4 py-2 text-white'
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default SubscribeForm;
