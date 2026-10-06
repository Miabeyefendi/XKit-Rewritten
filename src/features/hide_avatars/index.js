import { buildStyle } from '../../utils/interface.js';
import { translate } from '../../utils/language_data.js';
import { getPreferences } from '../../utils/preferences.js';

export const styleElement = buildStyle();

export const main = async function () {
  const { hiddenAvatars } = await getPreferences('hide_avatars');

  styleElement.textContent = hiddenAvatars
    .split(',')
    .map(blogname => blogname.trim())
    .filter(Boolean)
    .map(blogname => `a:is([href="/${blogname}"], [title="${blogname}"]) img[alt="${translate('Avatar')}"] { filter: blur(64px); }`)
    .join('\n');
};
