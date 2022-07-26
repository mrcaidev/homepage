import { FiGithub } from "react-icons/fi";
import { useLocaleValue } from "src/hooks/locale.hook";
import { IconLink } from "../common/icon-link";

export const GithubLink = () => {
  const label = useLocaleValue(
    "Open GitHub on a new tab to view source code of this page",
    "在新标签页上打开 GitHub 以浏览本页面的源码"
  );

  return (
    <IconLink href="https://github.com/mrcaidev/homepage" ariaLabel={label}>
      <FiGithub size="24px" />
    </IconLink>
  );
};
