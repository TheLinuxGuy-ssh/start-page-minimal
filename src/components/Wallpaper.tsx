import { WallpaperData } from "../assets/config";

const Wallpaper = () => {
    return (
        <div className="wallpaper">
            <img src={WallpaperData.url} />
        </div>
    )
}

export default Wallpaper;