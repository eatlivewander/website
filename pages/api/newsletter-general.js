// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    console.log('API REQUEST HIT');
    res.status(200).json({ name: 'John Doe' });
};
