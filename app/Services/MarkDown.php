<?php
/**
 * Created by PhpStorm.
 * User: cocoyo
 * Date: 2018/2/4 0004
 * Time: 21:32
 */
namespace App\Services;
use Parsedown;

class MarkDown
{
    /**
     * @var Parsedown
     */
    protected $markdownConverter;

    /**
     * MarkDown constructor.
     */
    public function __construct()
    {
        $this->markdownConverter = new Parsedown();
    }

    /**
     * Convert Markdown To Html.
     *
     * @param $markdown
     * @return string
     */
    public function convertMarkdownToHtml($markdown) :string
    {
        return $this->markdownConverter
            ->setBreaksEnabled(true)
            ->text($markdown);
    }

}