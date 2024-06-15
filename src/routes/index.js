import { Router } from 'express'
const router = Router()


router.get('/', (req, res) => res.render('index', { titulo: 'Quality Coin' }))

router.get('/about', (req, res) => res.render('about', { titulo: 'Acerca de' }))

router.get('/contact', (req, res) => res.render('contact', { titulo: 'Contacto' }))

export default router