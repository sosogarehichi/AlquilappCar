class IndexController {
    public async getExample(req: Request, res: Response): Promise<void> {
        res.status(200).json({ message: 'This is an example response' });
    }

    public async createExample(req: Request, res: Response): Promise<void> {
        const data = req.body;
        // Logic to handle data creation
        res.status(201).json({ message: 'Data created successfully', data });
    }

    public async updateExample(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const data = req.body;
        // Logic to handle data update
        res.status(200).json({ message: 'Data updated successfully', id, data });
    }

    public async deleteExample(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        // Logic to handle data deletion
        res.status(200).json({ message: 'Data deleted successfully', id });
    }
}

export default IndexController;