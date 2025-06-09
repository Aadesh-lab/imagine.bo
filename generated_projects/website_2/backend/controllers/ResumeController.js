const multer = require('multer');
const prisma = require('../prisma/client');
const supabase = require('@supabase/supabase-js');

const supabaseClient = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

exports.upload = upload.single('file'), async (req, res) => {
  const file = req.file;
  const user = req.user;

  if(!file) {
    return res.status(400).send('No file uploaded');
  }

  const {data, error} = await supabaseClient.storage.from('resumes').upload(`${user.id}/${file.originalname}`, file.buffer);

  if(error) {
    return res.status(500).send('Failed to upload file');
  }

  const createdResume = await prisma.resume.create({
    data: {
      userId: user.id,
      path: data.Key,
    },
  });

  res.send(createdResume);
};