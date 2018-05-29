<?php
/**
 * Created by PhpStorm.
 * User: cocoyo
 * Date: 2018/1/29 0029
 * Time: 10:47
 */
namespace App\Services\FileManager;

use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class BaseManager
{
    /**
     * @var \Illuminate\Filesystem\FilesystemAdapter
     */
    protected $disk;

    /**
     * BaseManager constructor.
     */
    public function __construct()
    {
        $this->disk = Storage::disk(config('filesystems.default'));
    }

    /**
     * 获取所有文件
     *
     * @param $directory
     * @return array
     */
    public function allFiles($directory)
    {
        return $this->disk->allFiles($directory);
    }

    /**
     * 获取文件类型
     *
     * @param $file
     * @return false|string
     * @throws \League\Flysystem\FileNotFoundException
     */
    public function getMineType($file)
    {
        return $this->disk->getMimetype($file);
    }

    public function delete($path)
    {
        return $this->disk->delete($path);
    }

    /**
     * 上传文件
     *
     * @param UploadedFile $file
     * @param string $dir
     * @return array
     */
    public function store(UploadedFile $file, $dir = '')
    {
        $hashName = $file->hashName();

        $mime = $file->getMimeType();

        $realName = $this->disk->putFileAs($dir, $file, $hashName);

        return [
            'success' => true,
            'filename' => $hashName,
            'original_name' => $file->getClientOriginalName(),
            'mime' => $mime,
            'size' => $file->getClientSize(),
            'relative_url' => url('/storage/' . $realName),
            'full_relative_url' => url('/storage/' . $realName)
        ];
    }
}