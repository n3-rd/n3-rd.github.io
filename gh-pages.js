import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/n3-rd/n3-rd.github.io.git', // Update to point to your repository
        user: {
            name: 'Godwin Jemegh', // update to use your name
            email: 'godwinjdayo@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);