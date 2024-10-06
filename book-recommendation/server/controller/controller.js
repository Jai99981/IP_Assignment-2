import BookModel from '../model/BookModel.js';
import User from '../model/User.js';


export async function createUser(req, res) {
    try {
        const name = req.body.user; // get name, to be changed
        const email = req.body.email; //get mail from the request, to be changed
        const password = req.body.pass; // get pass, to be changed

        const existEmail = await User.findOne({ email: email })

        if (existEmail) {
            return res
                .status(400)
                .send({ error: "Member with this email already exists" });
        }

        const user = new User({
            user,
            email,
            password
        }); // create new user

        user.save(); //save user to database

        res.status(201).send({ msg: "Member added successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err.message || "Internal Server Error" })
    }

}


export async function authenticateUser(req, res) {

}

export async function findBooktitle(req, res) {

}

export async function findBookUsingAuthor(req, res) {

}

export async function findBookThroughGenres(req, res) {

}

export async function getbooks(req, res) {
    try {
        
        const { title, author, genre } = req.query;
        console.log(title,author,genre)
        // Build the query object
        const query = {};
        if (title) query.Title = { $regex: title, $options: 'i' }; // Case-insensitive search
        if (author) query.Author = { $regex: author, $options: 'i' };
        if (genre) query.Genres = genre;

        // Perform the query on the Book model
        const books = await BookModel.find(query);

        // Return the results
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).send('Server Error');
    }
};


