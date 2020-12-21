const puppeteer = require('puppeteer')

module.exports = {
    async index(req, res) {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        await page.goto('https://download.blender.org/release/');

        try {
            const list = await page.evaluate(() => {
                const nodeList = document.querySelectorAll("a")
                const link = [...nodeList]
                const result = link.map(({ href }) => ({
                    href
                }))
                return result
            })
            browser.close()
            res.json({ releases: list })

        } catch (error) {
            res.json({ message: 'Cant found the releases!' })
        }
    }
}