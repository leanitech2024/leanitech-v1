// import BalancedGrid from '@/features/services/components/balanced-grid';
import { LazyBalancedGrid } from '@/features/services/components/lazy';
// import RegularGrid from '@/features/services/components/regular-grid';
// import ServicesMasonaryGrid from '@/features/services/components/services-masonary-grid';
// import SpannedGrid from '@/features/services/components/spanned-grid';
// import UnorderedList from '@/features/services/components/unordered-list';

const logoWork = [
  {
    id: 'd4c70cf8-2d31-4ebf-8a7b-fc4b624a091d',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774713441/Screenshot_2026-03-28_212659_yxeodx.png',
    width: 523,
    height: 406,
  },
  {
    id: '6cefeb32-9060-4697-8d35-816a1b8e82a4',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774711819/WhatsApp_Image_2026-03-28_at_7.08.18_PM_mkdrcs.jpg',
    width: 1533,
    height: 799,
  },
  {
    id: '5033014e-f841-48ca-863f-35fddf3e9987',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774711230/447951047_1011229527038377_3484184163196850149_n_t172qk.jpg',
    width: 500,
    height: 500,
  },
  {
    id: '7884c4df-2b71-48e1-a6eb-f7679dfadccf',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774623046/WhatsApp_Image_2026-03-27_at_8.18.45_PM_i1ydn3.jpg',
    width: 739,
    height: 415,
  },
  {
    id: '5e899323-ba9a-432e-a618-e8e05169fd2c',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774623040/WhatsApp_Image_2026-03-27_at_8.18.45_PM_1_wvxo73.jpg',
    width: 720,
    height: 1600,
  },
  {
    id: '7d44491e-f0f6-47bf-ada0-56a7b763f698',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774623038/WhatsApp_Image_2026-03-27_at_8.18.46_PM_uupuoi.jpg',
    width: 687,
    height: 399,
  },
  {
    id: '7e2a681b-f7fd-417a-864c-b03c382ebd0d',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774623037/WhatsApp_Image_2026-03-27_at_8.18.48_PM_eqswaf.jpg',
    width: 600,
    height: 400,
  },
  {
    id: 'f3255a8c-e53e-4368-a1dc-d2814be291ee',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774622089/301147499_379759024325988_5256408941438437933_n_mml6b8.jpg',
    width: 200,
    height: 200,
  },
  {
    id: '4517a141-6c67-4575-b793-46ef5526235c',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774622031/277570835_355623893247458_9110167104814940400_n_avthjb.jpg',
    width: 200,
    height: 200,
  },
  {
    id: 'a957858c-0e9b-431e-b3e4-95abd830bee1',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774621903/yoshima_logo_rpxs3f.png',
    width: 4242,
    height: 4242,
  },
  {
    id: 'f0d42321-a574-43a2-8f1e-2ec5b4ea88ce',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774621900/WhatsApp_Image_2024-12-25_at_13.16.16_88df16d5_boep7u.jpg',
    width: 384,
    height: 381,
  },
  {
    id: 'b0e2e2d6-abb1-4960-b039-e292240f788d',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774621851/Mindful-Strength-Logo_vyv7qy.png',
    width: 595,
    height: 305,
  },
  {
    id: '2f900494-83ba-4018-b5b5-928f25398580',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774621834/Logo_2_kcwntk.png',
    width: 431,
    height: 154,
  },
  {
    id: 'cebe3a69-8fa6-4429-93dd-f667ef3ba3dc',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774621802/IQ_BOX_PSD-1_m7v21t.png',
    width: 1563,
    height: 1563,
  },
  {
    id: '77174135-8d99-41e1-b531-4fdeb6f84374',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774621778/Logo_1_cu9yye.jpg',
    width: 1050,
    height: 1050,
  },
  {
    id: 'd98b74cd-2fc2-4cf8-a502-a25acb57b678',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774621759/logo_t75hy1.png',
    width: 2084,
    height: 440,
  },
  {
    id: '43f531b9-5843-4c26-b256-cbabc97627a4',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774621702/logo_ee7tcu.png',
    width: 2084,
    height: 440,
  },
  {
    id: '7fb684b7-e83c-4490-9682-5b44d39a4b99',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774621657/2_t9fv4s.jpg',
    width: 3464,
    height: 3464,
  },
  {
    id: '02c08f0e-42ff-4a26-9340-3494efd8adbb',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774621637/BRIDGE_jkeb1k.png',
    width: 500,
    height: 500,
  },
  {
    id: 'b81f1f88-4a6f-48b9-946e-acfc60957f45',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774621608/Saundarya_logo_black_1_1_evbghw.png',
    width: 29999,
    height: 8317,
  },
  {
    id: '4bb4f4e1-1ce2-44e2-b424-bfff0add9c0b',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774621560/White_green_and_orange_26_January_Republic_Day_Facebook_Post_1080_x_1080_px_1_sjb6it.png',
    width: 1080,
    height: 1080,
  },
  {
    id: '2aef1162-efdf-44bd-ad04-64317e067781',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774621543/Mosco_logo_BIG_Size_2.pdf_weomvi.png',
    width: 1333,
    height: 469,
  },
  {
    id: '3395824e-a08e-4c82-91f6-3b1096c01f88',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774621520/Snagyt_Snag_More_Wait_Less_cm4qaj.png',
    width: 5542,
    height: 1935,
  },
  {
    id: 'e897b63b-7799-4e6e-8cff-5f377e6539e7',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774543327/design_86593566_1_qi0xuz.svg',
    width: 2460,
    height: 936,
  },
  {
    id: '26e56e27-7fdc-419f-8f2e-a0266433d4f1',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774543312/WhatsApp-Image-2025-09-02-at-11.31.46-AM_gpfthb.jpg',
    width: 1024,
    height: 1024,
  },
  {
    id: 'dd279c68-85e6-40de-a1c7-fc8c2d46a8f6',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774543286/WhatsApp_Image_2025-10-11_at_01.39.46_1eceee49_e7fzts.jpg',
    width: 1189,
    height: 924,
  },
  {
    id: 'dd21f0be-9e3b-4a20-9d27-86f5ac5a9534',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774543268/unnamed_fs9eum.jpg',
    width: 288,
    height: 362,
  },
  {
    id: '90f759a7-1a9a-47e7-a3f7-9fa3d6fedbe6',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774543266/design_86593566_0-01_logo_sok4jc.png',
    width: 4892,
    height: 3900,
  },
  {
    id: '8f56a0ac-5751-4129-a3e5-c4b1f3916fa4',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774543109/logo_bzzzfl.png',
    width: 149,
    height: 30,
  },
  {
    id: 'cbd686c8-d8b5-4a43-9243-bc8457669268',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542908/logo-dark_xlw40r.png',
    width: 582,
    height: 141,
  },
  {
    id: '77db25c8-17f8-45b1-82b2-2747c5a9834d',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542868/1_nodwfz.png',
    width: 500,
    height: 500,
  },
  {
    id: 'be773bd6-b706-4df1-9738-9adf292a3397',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542849/logo-landscape_sxldhl.webp',
    width: 256,
    height: 54,
  },
  {
    id: '69aae59c-7609-48ea-b4da-69c312353f9a',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542849/logo-landscape-2_feyuij.webp',
    width: 2500,
    height: 2500,
  },
  {
    id: '949527c4-c8a7-4ccc-b2af-12e7b3f73d6f',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542849/logo-landscape_1_il6kag.webp',
    width: 256,
    height: 54,
  },
  {
    id: 'd835176d-2dd8-48d2-b99e-d76d7a3a9caa',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542848/logo-landscape_2_hwulme.webp',
    width: 256,
    height: 54,
  },
  {
    id: '5b2d0504-9f14-4b6f-9709-de1658ba6a79',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542555/Snagyt_Snag_More_Wait_Less_oqsmtz.png',
    width: 5542,
    height: 1935,
  },
  {
    id: '9f5ac3e6-0f8d-4dd5-bdf0-55ec09c1e265',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542494/paper_market_v1_erlcbl.png',
    width: 2260,
    height: 765,
  },
  {
    id: '48ad988f-248a-4209-a8e8-bb86e764afea',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542486/Saundarya_logo_black_1_inccq6.png',
    width: 29999,
    height: 8317,
  },
  {
    id: '947e6c73-726c-4a0e-9917-3bc4d9272e86',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542435/logo_ljzms3.png',
    width: 1366,
    height: 429,
  },
  {
    id: 'f00d9d7f-e73f-41b3-bab5-b31700cbcb93',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542411/WhatsApp_Image_2026-01-10_at_1.39.59_PM_1_pblrp1.jpg',
    width: 1280,
    height: 853,
  },
  {
    id: '4a87d5d8-c362-4615-ba87-452269d95a4d',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542394/WhatsApp_Image_2026-01-17_at_7.53.29_PM_sg300n.jpg',
    width: 423,
    height: 232,
  },
  {
    id: '07eb0ab7-9b34-497d-b07f-57fd434234e4',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542376/White__green_and_orange_26_January_Republic_Day_Facebook_Post__1080_x_1080_px___1_-removebg-preview_guor3x.png',
    width: 500,
    height: 500,
  },
  {
    id: '87a43074-62d9-4748-b871-ddcf48e243c0',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542352/Mosco_logo_BIG_Size__2_.pdf-removebg-preview_qn8sfb.png',
    width: 842,
    height: 296,
  },
  {
    id: '13215a66-69e1-457f-ad15-b707fba90853',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542299/WhatsApp_Image_2026-03-10_at_6.13.40_PM_f52dja.jpg',
    width: 1080,
    height: 1063,
  },
  {
    id: '68f158d3-8214-4154-8614-f7724d06e879',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774542261/ChatGPT_Image_Mar_9_2026_02_05_20_PM_xnzxly.png',
    width: 1024,
    height: 1024,
  },
];

const posterWork = [
  {
    id: 'ce631167-1aac-4080-b02e-693ce1bf8ff3',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774690589/WhatsApp_Image_2026-02-26_at_9.03.52_AM_armkpn.jpg',
    width: 1080,
    height: 1080,
  },
  {
    id: '3ab11c91-6b4a-4079-a09e-5521679aa10d',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774690589/WhatsApp_Image_2026-03-02_at_4.19.30_PM_chx5ew.jpg',
    width: 1080,
    height: 1080,
  },
  {
    id: 'b5433bc6-59f9-4cd4-8fb4-922d67a27ab0',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774690563/11_48_a1uw9t.png',
    width: 2565,
    height: 2565,
  },
  {
    id: '1a0f33d9-a3f6-4e0c-8286-45f85f4bfcd1',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774690555/WhatsApp_Image_2026-03-13_at_9.38.53_PM_ry9sht.jpg',
    width: 1080,
    height: 1080,
  },
  {
    id: '3f890548-0475-4f04-83b0-6c7bc8950aa1',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774690555/WhatsApp_Image_2026-03-09_at_12.18.59_PM_b5b0xp.jpg',
    width: 1080,
    height: 1080,
  },
  {
    id: 'f967cf35-bff1-4b4e-b30c-e37c9e0f0646',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774690554/11_49_pxmlmy.png',
    width: 2835,
    height: 2835,
  },
  {
    id: '1c1a1f21-7925-46da-8cc5-ef011930a820',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774690553/WhatsApp_Image_2026-03-20_at_10.31.26_AM_yc5vyt.jpg',
    width: 1080,
    height: 1080,
  },
  {
    id: 'eace0cfe-e4ea-4172-ad35-a6cd0dd4fa38',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774690525/WhatsApp_Image_2026-03-25_at_10.10.34_AM_ezojiw.jpg',
    width: 1080,
    height: 1080,
  },
  {
    id: '1c1ec97c-7d4a-48ee-9ea1-b36ac89473cf',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774690525/WhatsApp_Image_2026-03-24_at_8.09.50_PM_crvxwk.jpg',
    width: 1080,
    height: 1080,
  },
  {
    id: 'e5d3b29b-8f7a-4900-bf18-8135e0bcf449',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774690203/WhatsApp_Image_2026-03-25_at_10.10.34_AM_hrlsjt.jpg',
    width: 1080,
    height: 1080,
  },
  {
    id: '16595b17-eb1d-497e-b798-7be365e4696a',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774690202/WhatsApp_Image_2026-03-13_at_7.31.06_PM_fmrj2h.jpg',
    width: 1024,
    height: 1536,
  },
  {
    id: '6bf59d86-05ea-45ea-ac3b-0e631dba068c',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774690202/WhatsApp_Image_2026-03-24_at_8.09.50_PM_fiujcd.jpg',
    width: 1080,
    height: 1080,
  },
  {
    id: '4c25f41e-a679-413a-a1b4-7abe7f5db23c',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774690193/WhatsApp_Image_2026-03-13_at_7.31.14_PM_bt8gzd.jpg',
    width: 1024,
    height: 1536,
  },
  {
    id: '1249322e-0f31-4c5b-aefd-034829a67935',
    imgSrc:
      'https://res.cloudinary.com/duug6ntbz/image/upload/v1774690171/WhatsApp_Image_2026-03-13_at_7.31.43_PM_wxe6hs.jpg',
    width: 1024,
    height: 1536,
  },
];

const videoWork = [
  {
    id: 'e3247629-1634-4271-ae69-87386f066f59',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774709347/SaveGram.App_AQP4BI03idyJhOkCTblYU00TSf-JVDD8KFBFjYW6GfnIqO18-6-a_aidg9FfHo_dcqINPkbPwWWjSNUSJK2XLA9TVS9dH0JPDicJli0_cnczpz.mp4',
    width: 720,
    height: 1280,
  },
  {
    id: '7eef0963-2ffb-4514-9f61-0396b35c9508',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774708577/WhatsApp_Video_2026-02-16_at_6.26.37_PM_vgyacl.mp4',
    width: 1080,
    height: 1920,
  },
  {
    id: 'b9151b94-7f1e-498e-b308-390e4438d5d5',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774707988/WhatsApp_Video_2026-03-28_at_7.55.51_PM_o5te3e.mp4',
    width: 478,
    height: 850,
  },
  {
    id: 'd42e5b2b-f6e7-411a-a56f-43596e851e55',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774707441/WhatsApp_Video_2026-03-28_at_7.26.24_PM_kox5es.mp4',
    width: 478,
    height: 850,
  },
  {
    id: '32f8b10f-6d0d-4150-8efd-4251c0c5daf2',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774690225/Instera_Custom_Box_1_qbhox3.mp4',
    width: 1080,
    height: 1920,
  },
  {
    id: '244b07c8-772e-472b-ba16-80694cf83093',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774690214/Gift_Box_1_rlgnxi.mp4',
    width: 1080,
    height: 1920,
  },
  {
    id: '5580ec7b-d191-4718-ab59-296d51058f19',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774689546/Instera_Custom_Box_1_sv0tey.mp4',
    width: 1080,
    height: 1920,
  },
  {
    id: '84b6e5e3-f04f-48f4-968c-3fa5bb8b3a74',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774621294/WhatsApp_Video_2025-10-08_at_23.05.31_60ddrd60468a_oklq49.mp4',
    width: 1080,
    height: 1920,
  },
  {
    id: 'd1621729-8aec-420b-84a1-5a6781f39a71',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774620987/WhatsApp_Video_2025-09-20_at_14.46.50_416d2ae2_bmahme.mp4',
    width: 720,
    height: 1280,
  },
  {
    id: '7daa4e4d-eed6-4b81-87eb-2a2adf67f5b3',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774620958/WhatsApp_Video_2025-09-06_at_17.45.25_ecb0912b_auia3j.mp4',
    width: 1080,
    height: 1920,
  },
  {
    id: 'a41cd108-b11c-4477-b1cb-002bc1cbf904',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774620866/WhatsApp_Video_2025-09-15_at_11.28.01_73e785de_bkqwrs.mp4',
    width: 478,
    height: 850,
  },
  {
    id: 'a14d53d1-7c7d-402e-a952-652cc2c28cbd',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774620743/Highquality_3d_animated_202510042259_tgp9f_rvpj6q.mp4',
    width: 720,
    height: 1280,
  },
  {
    id: 'b62da5fa-13dc-429f-a01a-2225cdf31103',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774620661/WhatsApp_Video_2025-12-03_at_6.27.41_PM_1_xko8or.mp4',
    width: 720,
    height: 1280,
  },
  {
    id: 'f09d6ff8-3cfd-48ed-a8f4-2228d4df8af2',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774620574/VID-20260111-WA0001_qv6je2.mp4',
    width: 478,
    height: 850,
  },
  {
    id: 'e45a21e5-3329-4829-ab7e-1cc57b302c17',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774620502/WhatsApp_Video_2026-01-27_at_8.17.25_PM_a5d27y.mp4',
    width: 1080,
    height: 1920,
  },
  {
    id: '0e40c62d-6fbd-4209-bc6d-509b7116e5f2',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774620401/WhatsApp_Video_2026-02-05_at_12.58.39_PM_l70l3q.mp4',
    width: 1080,
    height: 1920,
  },
  {
    id: '45c801b7-3582-4f95-b68e-9770b4d2b3d3',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774620302/WhatsApp_Video_2026-02-13_at_6.10.53_PM_tgbftn.mp4',
    width: 1080,
    height: 1920,
  },
  {
    id: '55fa8d84-368e-4654-8663-51869bdf1678',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774620137/Universal_Mobile_Tablet_Stand_Holder_002_ntioum.mp4',
    width: 1080,
    height: 1920,
  },
  {
    id: '5c465438-ea5b-473a-a616-15c536a50646',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774620003/videoplayback_hyyd82.mp4',
    width: 640,
    height: 360,
  },
  {
    id: '037e447a-6ee4-4142-b48a-db5dcef3f88e',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774619992/WhatsApp_Video_2026-03-06_at_2.14.31_PM_kre2zn.mp4',
    width: 720,
    height: 1280,
  },
  {
    id: 'ebcd0a9f-5670-4f01-bacf-129bb024f6f3',
    videoSrc:
      'https://res.cloudinary.com/duug6ntbz/video/upload/v1774619951/WhatsApp_Video_2026-02-28_at_4.24.55_PM_cy4q3x.mp4',
    width: 720,
    height: 1280,
  },
];

export default function ServicePage() {
  return (
    <main className='py-16 xs:py-20 sm:py-16 md:py-12 lg:py-8 space-y-8'>
      <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <LazyBalancedGrid data={logoWork} srcType='image' />
      </section>
      <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <LazyBalancedGrid data={posterWork} srcType='image' />
      </section>
      <section className={'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6'}>
        <LazyBalancedGrid data={videoWork} srcType='video' />
      </section>
    </main>
  );
}
