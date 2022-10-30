import { deleteFunction, update } from ".";

export default async function handler(req, res) {
    const { id } = req.query;
    try {
        if (req.method === 'DELETE') {
            await deleteFunction(id);
        } else if (req.method === 'PATCH') {
            await update({ id, ...req.body });
        }
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ error });
    }
}