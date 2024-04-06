import { Telegram, X } from '@mui/icons-material';
import cock from '../assets/agile-rocket.gif';
import './content.css';
import { Link } from '@mui/material';

export const Content = () => {
  return (
    <section className='content'>
      <div className='content-row main-row'>
        <img src={cock} alt='TheCock' className='gat' />
        <div className='row-section'>
          <p className='intro'>Hard as a rock!</p>
          <div className='socials'>
            <Link href='https://raydium.io/swap/?outputCurrency=4NVypRS1MoBAWTDUXUjgXzmP29tBXM91tK1XcSrZtoPr'>
              <div className='link'>Buy $THECOCK</div>
            </Link>
            <Link
              className='link-icon tg'
              href='https://t.me/TheCockJohnsonSol'
            >
              <Telegram
                sx={{ width: '50px', height: '50px', marginLeft: '2em' }}
                color='primary'
              />
            </Link>
            <Link className='link-icon x' href='https://x.com/cockjohnsonsol'>
              <X
                sx={{ width: '50px', height: '50px', marginLeft: '2em' }}
                color='primary'
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='content-row brick-row'>
        <Link
          color='primary'
          underline='hover'
          sx={{ fontSize: '1.5em' }}
          href='https://dexscreener.com/solana/4NVypRS1MoBAWTDUXUjgXzmP29tBXM91tK1XcSrZtoPr'
        >
          <p className='ca'>4NVypRS1MoBAWTDUXUjgXzmP29tBXM91tK1XcSrZtoPr</p>
        </Link>
      </div>
    </section>
  );
};
