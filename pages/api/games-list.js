import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const dataDir = path.join(process.cwd(), 'data', 'games');
  try {
    const files = fs.existsSync(dataDir) ? fs.readdirSync(dataDir).filter(f => f.endsWith('.json')) : [];
    const games = files.map(f => JSON.parse(fs.readFileSync(path.join(dataDir,f),'utf-8')));
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({error: 'Failed to read games'});
  }
}
