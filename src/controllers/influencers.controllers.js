export class InfluencerController {
  index = async (req, res) => {
    try {
      return res.status(200).json({ message: 'OK' });
    } catch (error) {
      console.info(`error: ${error}`);
    }
  };
}
